import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
import { request, response } from "express";
import products from "../data.json" assert { type: "json" };

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class ChatbotController {
    static async chatbot(request, response) {
        const { userMessage } = request.body;

        try {
            // Step 1: Ask GPT to extract filters
            const aiResponse = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are an e-commerce assistant. Extract product filters from user queries like category and price. Example: 'necklaces under 20k' -> {category:'necklace', maxPrice:20000}",
                    },
                    { role: "user", content: userMessage },
                ],
            });

            const filterText = aiResponse.choices[0].message.content;
            console.log("AI Filter:", filterText);

            // Step 2: Parse filterText into JSON (basic approach)
            let filters = {};
            try {
                filters = JSON.parse(filterText);
            } catch (e) {}

            // Step 3: Filter products
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
                    (p) => p.discountPrice <= filters.maxPrice
                );
            }

            response.json({
                message: "Here are the results",
                products: filteredProducts,
            });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: "Something went wrong" });
        }
    }
}
