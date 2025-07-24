import axios from "axios";

export class ChatbotService {
    static async chatbot(data) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/ai/chat`,

                {
                    userMessage: data,
                }
            );
            return response.data;
        } catch (error) {
            console.log("error during chat query", error);
            return {
                success: false,
                data: null,
                response: error?.response?.data?.message || error?.message,
            };
        }
    }
}
