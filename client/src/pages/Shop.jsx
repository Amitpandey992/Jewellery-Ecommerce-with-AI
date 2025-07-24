import React, { useContext, useState, useEffect } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import AppContext from "../context/productContext";
// import { useNavigate } from "react-router-dom";

function Shop() {
    // const navigate = useNavigate()
    const { products, fetchProducts, isLoading } = useContext(AppContext);
    console.log("Context in Shop:", { products, fetchProducts, isLoading });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [...new Set(products?.map((p) => p.category) || [])];
    const genders = [...new Set(products?.map((p) => p.gender) || [])];
    const occasions = [
        ...new Set(products?.flatMap((p) => p.occasion || []) || []),
    ];
    // const brands = [...new Set(products?.map((p) => p.brand) || [])];

    useEffect(() => {
        if (!products) {
            setFilteredProducts([]);
            return;
        }
        if (selectedCategory === "All") {
            setFilteredProducts(products.filter((p) => p.inStock));
        } else {
            setFilteredProducts(
                products.filter(
                    (p) => p.category === selectedCategory && p.inStock
                )
            );
        }
    }, [products, selectedCategory]);

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("products", products);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={
                        i <= Math.round(rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                    }
                />
            );
        }
        return stars;
    };

    console.log(filteredProducts);

    if (isLoading) {
        return (
            <div className="container mx-auto py-12 px-4">
                Loading product...
            </div>
        );
    }

    if (!products || products.length === 0) {
        return <div>No products available.</div>;
    }

    return (
        <div>
            <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row gap-8">
                <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 ">
                    <h2 className="text-2xl font-bold mb-4">Categories</h2>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="flex justify-between items-center text-lg font-semibold hover:underline"
                                href="#"
                            >
                                Jewelry Types
                            </a>
                            <ul className="ml-4 mt-2 space-y-1">
                                <li>
                                    <a
                                        className={`hover:underline ${
                                            selectedCategory === "All"
                                                ? "text-green-600 font-bold"
                                                : ""
                                        }`}
                                        href="#"
                                        onClick={() =>
                                            setSelectedCategory("All")
                                        }
                                    >
                                        All
                                    </a>
                                </li>
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <a
                                            className={`hover:underline ${
                                                selectedCategory === category
                                                    ? "text-green-600 font-bold"
                                                    : ""
                                            }`}
                                            href="#"
                                            onClick={() =>
                                                setSelectedCategory(category)
                                            }
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a
                                className="flex justify-between items-center text-lg font-semibold hover:underline"
                                href="#"
                            >
                                Gender
                            </a>
                            <ul className="ml-4 mt-2 space-y-1">
                                {genders.map((gender, index) => (
                                    <li key={index}>
                                        <a className="hover:underline" href="#">
                                            {gender}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a
                                className="flex justify-between items-center text-lg font-semibold hover:underline"
                                href="#"
                            >
                                Occasion
                            </a>
                            <ul className="ml-4 mt-2 space-y-1">
                                {occasions.map((occasion, index) => (
                                    <li key={index}>
                                        <a className="hover:underline" href="#">
                                            {occasion}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </aside>
                <main className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <ul className="flex space-x-4 mb-4 md:mb-0">
                            <li>
                                <a
                                    className={`text-lg font-semibold hover:underline ${
                                        selectedCategory === "All"
                                            ? "text-green-600 font-bold"
                                            : ""
                                    }`}
                                    href="#"
                                    onClick={() => setSelectedCategory("All")}
                                >
                                    All
                                </a>
                            </li>
                            {categories.slice(0, 3).map((category, index) => (
                                <li key={index}>
                                    <a
                                        className={`text-lg font-semibold hover:underline ${
                                            selectedCategory === category
                                                ? "text-green-600 font-bold"
                                                : ""
                                        }`}
                                        href="#"
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts?.map((p) => (
                            <div
                                key={p.id}
                                className="bg-white rounded-lg shadow p-4 flex flex-col"
                            >
                                <div className="relative group">
                                    <img
                                        src={
                                            p.images[0]?.url ||
                                            "/assets/img/placeholder.jpg"
                                        }
                                        alt={p.images[0]?.alt || p.name}
                                        className="rounded-lg mb-4 w-full h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition">
                                        <a
                                            href={`/shop-single/${p.id}`}
                                            className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
                                        >
                                            <FaEye />
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href={`/shop-single/${p.slug}`}
                                    className="text-lg font-semibold hover:underline mb-2"
                                >
                                    {p.name}
                                </a>
                                <div className="flex justify-center space-x-1 mb-2">
                                    {renderStars(p.rating)}
                                    <span className="text-sm text-gray-600 ml-2">
                                        ({p.reviewsCount})
                                    </span>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold">
                                        {p.currency}{" "}
                                        {p.discountPrice || p.price}
                                    </p>
                                    {p.discountPrice && (
                                        <p className="text-sm text-gray-500 line-through">
                                            {p.currency} {p.price}
                                        </p>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 text-center">
                                    {p.brand}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Shop;
