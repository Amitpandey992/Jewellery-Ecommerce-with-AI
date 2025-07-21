import express from "express";
import { ChatbotController } from "../controllers/chatbot.controller.js";

const router = express.Router();

router.post("/chat", ChatbotController.chatbot);

export default router;
