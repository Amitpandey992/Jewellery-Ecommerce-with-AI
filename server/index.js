import express from "express";
import jewelleryRoute from "./routes/jewellery.route.js";
import ChatbotRoute from "./routes/chatbot.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use("/api", jewelleryRoute);
app.use("/api/ai", ChatbotRoute);

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
