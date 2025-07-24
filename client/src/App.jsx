import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopSingle from "./pages/ShopSingle";
import Chatbot from "./pages/Chatbot";
import Layout from "./pages/layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop-single/:id" element={<ShopSingle />} />
                    <Route path="/chat" element={<Chatbot />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
