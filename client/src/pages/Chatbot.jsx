import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        const res = await axios.post("http://localhost:3000/api/ai/chat", {
            userMessage: input,
        });
        setMessages((prev) => [
            ...prev,
            { sender: "bot", text: JSON.stringify(res.data.products, null, 2) },
        ]);
        setInput("");
    };

    return (
        <div className="p-4 max-w-md mx-auto border rounded-lg">
            <div className="h-64 overflow-y-auto mb-4 bg-gray-100 p-2">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={
                            msg.sender === "user" ? "text-right" : "text-left"
                        }
                    >
                        <p>
                            <strong>{msg.sender}:</strong> {msg.text}
                        </p>
                    </div>
                ))}
            </div>
            <input
                className="border p-2 w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
                className="bg-blue-500 text-white p-2 mt-2 w-full"
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    );
}
