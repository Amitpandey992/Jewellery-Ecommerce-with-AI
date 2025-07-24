import React, { useContext, useState, useEffect } from "react";
import { FaStar, FaRobot, FaTruckLoading } from "react-icons/fa";
import { ChatbotService } from "../services/chatbot.service";
import AppContext from "../context/productContext";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { fetchProducts, products, isLoading } = useContext(AppContext);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [chatLoading, setChatLoading] = useState(false);

    const formatChatbotResponse = (response) => {
        const { filters, count, products } = response;
        if (!products || products.length === 0) {
            return "No products found.";
        }
        const category = filters?.category || "items";
        const productList = products
            .map((product) => (
                <Link
                    key={product.id}
                    to={`/shop-single/${product.id}`}
                    className="text-blue-600 hover:underline"
                >
                    {product.name}
                </Link>
            ))
            .reduce(
                (prev, curr, index) => (
                    <>
                        {prev}
                        {index < products.length - 1 ? ", " : ""}
                        {curr}
                    </>
                ),
                null
            );
        return (
            <span>
                Found {count} {category}(s): {productList}
            </span>
        );
    };

    const handleChatQuery = async (data) => {
        if (!data.trim()) return; // Prevent sending empty queries
        setChatLoading(true);

        // Add user message to the chat
        setMessages((prev) => [...prev, { text: data, isUser: true }]);

        try {
            const response = await ChatbotService.chatbot(data);
            console.log("Chatbot response:", response);
            const formattedResponse = formatChatbotResponse(response);
            setMessages((prev) => [
                ...prev,
                { text: formattedResponse, isUser: false },
            ]);
            setInput(""); // Clear input after sending
        } catch (error) {
            console.error("Chatbot error:", {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
                url: error.config?.url,
            });
            setMessages((prev) => [
                ...prev,
                {
                    text: `Error: ${
                        error.response?.data?.message ||
                        error.message ||
                        "Could not get response from chatbot."
                    }`,
                    isUser: false,
                },
            ]);
            setInput(""); // Clear input on error
        } finally {
            setChatLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const chatWindow = document.querySelector(".overflow-y-auto");
        if (chatWindow) {
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }, [messages]);

    if (isLoading) {
        return <div className="container mx-auto py-12 px-4">Loading...</div>;
    }

    return (
        <div>
            <div className="relative w-full overflow-hidden">
                <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row items-center">
                    <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-0">
                        <h1 className="text-4xl font-bold text-green-600 mb-2">
                            Zaywellery{" "}
                            <span className="text-gray-900 font-roboto">
                                eCommerce
                            </span>
                        </h1>
                        <h3 className="text-2xl mb-4 font-roboto">
                            Tiny and Perfect eCommerce for jewellery
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse necessitatibus sequi suscipit odit
                            cupiditate recusandae culpa ullam sapiente
                            repellendus provident?
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            className="rounded-lg shadow-lg max-w-xs"
                            src="https://images.pexels.com/photos/6394590/pexels-photo-6394590.jpeg"
                            alt="Banner"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div
                    className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                >
                    <FaRobot className="h-6 w-6" />
                </div>

                {isChatOpen && (
                    <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
                        <div className="p-2 bg-green-600 text-white font-semibold rounded-t flex justify-between">
                            <span>Chatbot</span>
                            <button
                                className="text-sm hover:underline"
                                onClick={() => setMessages([])}
                            >
                                Clear
                            </button>
                        </div>
                        <div
                            className="flex-1 p-4 overflow-y-auto text-sm"
                            style={{ maxHeight: "300px" }}
                        >
                            {messages.length === 0 && (
                                <p className="text-gray-500">
                                    Ask me anything...
                                </p>
                            )}
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 flex ${
                                        message.isUser
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`inline-block p-2 rounded-2xl max-w-[70%] ${
                                            message.isUser
                                                ? "bg-green-600 text-white"
                                                : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-2 border-t flex">
                            <input
                                type="text"
                                className="flex-1 border border-gray-300 rounded-l px-2 py-1 text-sm"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" && !chatLoading) {
                                        handleChatQuery(input);
                                    }
                                }}
                                disabled={chatLoading}
                            />
                            <button
                                className={`bg-green-600 text-white px-4 rounded-r text-sm hover:bg-green-700 ${
                                    chatLoading
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:cursor-pointer"
                                }`}
                                onClick={() => handleChatQuery(input)}
                                disabled={chatLoading}
                            >
                                {chatLoading ? "Loading..." : "Send"}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            Featured Product
                        </h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste tenetur, ut quibusdam corrupti minus
                            commodi illum maiores vero saepe molestiae!
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {products.slice(0, 3).map((product) => (
                            <div
                                key={product.id}
                                className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col hover:opacity-75 cursor-pointer"
                                onClick={() =>
                                    navigate(`/shop-single/${product.id}`)
                                }
                            >
                                <img
                                    src={
                                        product.images[0]?.url ||
                                        "/assets/img/placeholder.jpg"
                                    }
                                    className="rounded-lg mb-4 max-h-[300px] object-cover"
                                    alt={product.name}
                                />
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex text-yellow-400 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={
                                                    i <
                                                    Math.round(product.rating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg font-bold">
                                            {product.currency}{" "}
                                            {product.discountPrice ||
                                                product.price}
                                        </p>
                                        {product.discountPrice && (
                                            <p className="text-sm text-gray-500 line-through">
                                                {product.currency}{" "}
                                                {product.price}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-lg font-semibold hover:underline mb-2">
                                    {product.name}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    {product.description.slice(0, 100)}...
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Reviews ({product.reviewsCount})
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mt-3 text-blue-600 underline hover:opacity-75 justify-center mr-6">
                    <a className="hover:underline" href="/shop">
                        View All Jewellery
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
