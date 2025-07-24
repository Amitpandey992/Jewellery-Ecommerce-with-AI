import axios from "axios";

export class ProductService {
    static async products() {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/jewellery`
            );
            return response.data;
        } catch (error) {
            console.error("error while fetching products", error);
            return {
                success: false,
                data: null,
                message: error?.response?.data?.message || error?.message,
            };
        }
    }

    static async getProductById(id) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/${id}`
            );
            console.log("response from service file", response);
            return response.data;
        } catch (error) {
            console.error("error while fetching product by id", error);
            return {
                success: false,
                data: null,
                message: error?.response?.data?.message || error?.message,
            };
        }
    }
}
