import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data.json"), "utf-8")
);
const products = data.jewellery;

dotenv.config();

const OLLAMA_HOST = process.env.OLLAMA_HOST || "http://localhost:11434";

export class ChatbotController {
    static async chatbot(req, res) {
        const { userMessage } = req.body;

        try {
            const ollamaResp = await fetch(`${OLLAMA_HOST}/api/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "gemma3",
                    stream: false,
                    prompt: `Extract product filters from this user query for a jewellery e-commerce store.
User query: "${userMessage}"

Return ONLY valid minified JSON in this exact shape:
{"category":"<string|optional>","maxPrice":<number|optional>}

If nothing found, return {}.
No extra text.`,
                }),
            });

            const ollamaData = await ollamaResp.json();
            let rawAI = (ollamaData.response || "").trim();
            console.log("AI raw:", rawAI);

            rawAI = rawAI.replace(/```json|```/gi, "").trim();

            let filters = {};
            try {
                filters = JSON.parse(rawAI);
            } catch {
                const jsonMatch = rawAI.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    try {
                        filters = JSON.parse(jsonMatch[0]);
                    } catch {
                        console.log("Still can't parse JSON from AI.");
                    }
                } else {
                    console.log("No JSON braces found in AI response.");
                }
            }

            if (!filters.category) {
                const catFromMsg = guessCategoryFromMessage(userMessage);
                if (catFromMsg) filters.category = catFromMsg;
            }
            if (!filters.maxPrice) {
                const priceFromMsg = guessPriceFromMessage(userMessage);
                if (priceFromMsg) filters.maxPrice = priceFromMsg;
            }

            console.log("Resolved filters:", filters);

            let filteredProducts = products;

            if (filters.category) {
                filteredProducts = filteredProducts.filter(
                    (p) =>
                        p.category.toLowerCase() ===
                        filters.category.toLowerCase()
                );
            }

            if (filters.maxPrice) {
                filteredProducts = filteredProducts.filter(
                    (p) =>
                        Number(p.discountPrice ?? p.price) <=
                        Number(filters.maxPrice)
                );
            }

            return res.json({
                filters,
                count: filteredProducts.length,
                products: filteredProducts,
            });
        } catch (err) {
            console.error("Chatbot error:", err);
            return res
                .status(500)
                .json({ error: "Something went wrong in chatbot." });
        }
    }
}

const CATEGORY_KEYWORDS = [
    { key: "ring", cat: "Ring" },
    { key: "necklace", cat: "Necklace" },
    { key: "mangalsutra", cat: "Mangalsutra" },
    { key: "earring", cat: "Earrings" },
    { key: "bangle", cat: "Bangle" },
    { key: "bracelet", cat: "Bracelet" },
    { key: "pendant", cat: "Pendant" },
    { key: "anklet", cat: "Anklet" },
    { key: "nose", cat: "NosePin" },
    { key: "chain", cat: "Chain" },
    { key: "kid", cat: "Kids" },
];

function guessCategoryFromMessage(msg = "") {
    const m = msg.toLowerCase();
    const found = CATEGORY_KEYWORDS.find(({ key }) => m.includes(key));
    return found?.cat;
}

function guessPriceFromMessage(msg = "") {
    const m = msg.toLowerCase();

    const kMatch = m.match(/(\d+(?:\.\d+)?)\s*k/);
    if (kMatch) return Math.round(Number(kMatch[1]) * 1000);

    const numMatch = m.match(/(\d{3,7})/);
    if (numMatch) return Number(numMatch[1]);

    return null;
}
