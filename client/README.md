# 💎 Jewellery E-commerce Web App

An elegant and modern jewellery e-commerce application built with **React**, **Tailwind CSS**, and a **Node.js + Express** backend, integrated with **AI (Gemma3)** to smartly filter products based on natural language queries.

## 🔧 Tech Stack

### ⚙️ Frontend

-   React (with React Router)
-   Vite
-   Tailwind CSS
-   Context API

### ⚙️ Backend

-   Node.js + Express
-   dotenv
-   Ollama (running `gemma3` model)
-   JSON mock data (`data.json`)

---

## 🧠 AI Integration

The app includes an AI-powered chatbot that understands user queries like:

> _"Show me necklaces under ₹20,000"_  
> _"I want something for office wear under 10k"_

It sends this query to the backend, which uses **Gemma3 via Ollama** to extract relevant filters and returns the matching products.

---

---

## 🚀 Getting Started

### 🔹 Prerequisites

-   Node.js
-   npm or yarn
-   Ollama installed locally with `gemma3` model downloaded

### 🔹 Clone the Repository

```bash
git clone https://github.com/Amitpandey992/jewellery-ecommerce.git
cd jewellery-ecommerce


Running the Application
1. Start Ollama AI Server
Make sure Ollama is installed and the gemma3 model is available:


ollama run gemma3

2. Setup Backend (Server)

cd server
npm install


Create a .env file in the server directory:

OLLAMA_HOST=http://localhost:11434
PORT=3000

Then run the server:

npm run dev

3. Setup Frontend (Client)

cd ../client
npm install
npm run dev

🧑‍💻 Author
👤 Amit Pandey

GitHub: @Amitpandey992

LinkedIn: [https://www.linkedin.com/in/amit7582]
```
