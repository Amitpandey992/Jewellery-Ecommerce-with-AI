import { createContext, useState } from "react";
import { ProductService } from "../services/product.service";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userMessage, setUserMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState({});
    const [filters, setFilters] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await ProductService.products();
            setProducts(response.jewellery);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchProductById = async (id) => {
        setIsLoading(true);
        try {
            const response = await ProductService.getProductById(id);
            console.log("response from context file", response);
            setProductById(response);
        } catch (error) {
            console.error("Error fetching product by id:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        userMessage,
        setUserMessage,
        products,
        setProducts,
        filters,
        setFilters,
        fetchProducts,
        isLoading,
        productById,
        fetchProductById,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
