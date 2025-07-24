import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    FaChevronLeft,
    FaChevronRight,
    FaStar,
    FaHeart,
    FaEye,
    FaCartPlus,
    FaTruck,
    FaCertificate,
    FaRuler,
    FaVenusMars,
    FaTag,
    FaGem,
} from "react-icons/fa";
import AppContext from "../context/productContext";

const ShopSingle = () => {
    const { fetchProductById, productById, isLoading } = useContext(AppContext);
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        console.log("ShopSingle Context:", { id, productById, isLoading });
        if (id) {
            fetchProductById(id);
        }
    }, [id]);

    const nextImage = () => {
        if (productById && productById.images) {
            setCurrentImageIndex((prev) =>
                prev === productById.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (productById && productById.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? productById.images.length - 1 : prev - 1
            );
        }
    };

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

    if (isLoading) {
        return (
            <div className="container mx-auto py-12 px-4">
                Loading product...
            </div>
        );
    }

    if (!productById || productById.success === false) {
        return (
            <div className="container mx-auto py-12 px-4">
                Product not found.
            </div>
        );
    }

    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-2/5 flex flex-col items-center">
                        <img
                            src={
                                productById.images?.[currentImageIndex]?.url ||
                                "/assets/img/placeholder.jpg"
                            }
                            alt={
                                productById.images?.[currentImageIndex]?.alt ||
                                productById.name
                            }
                            className="rounded-lg shadow mb-4 w-full max-w-xs h-80 object-cover"
                        />
                        <div className="flex items-center justify-center space-x-2 mt-2">
                            <button onClick={prevImage} className="p-2">
                                <FaChevronLeft />
                            </button>
                            {productById.images?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.url}
                                    alt={img.alt}
                                    className={`w-16 h-16 object-cover rounded border ${
                                        index === currentImageIndex
                                            ? "border-green-600"
                                            : "border-gray-300"
                                    } cursor-pointer`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                            <button onClick={nextImage} className="p-2">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-8">
                        <h1 className="text-3xl font-bold mb-2">
                            {productById.name}
                        </h1>
                        <div className="flex items-center mb-2">
                            <div className="flex space-x-1">
                                {renderStars(productById.rating)}
                            </div>
                            <span className="ml-2 text-gray-600">
                                {productById.rating} ({productById.reviewsCount}{" "}
                                Comments)
                            </span>
                        </div>
                        <div className="mb-4">
                            <p className="text-2xl text-green-600">
                                {productById.currency}{" "}
                                {productById.discountPrice || productById.price}
                            </p>
                            {productById.discountPrice && (
                                <p className="text-sm text-gray-500 line-through">
                                    {productById.currency} {productById.price}
                                </p>
                            )}
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaTag className="inline mr-2" /> Brand:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.brand}
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaGem className="inline mr-2" /> Category:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.category} (
                                {productById.subCategory})
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaCertificate className="inline mr-2" />{" "}
                                Material:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.material}
                                {productById.purityK &&
                                    ` (${productById.purityK}K)`}
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaRuler className="inline mr-2" /> Weight:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.weight_g}g
                            </span>
                        </div>
                        {productById.gemstone && (
                            <div className="mb-2">
                                <span className="font-semibold">
                                    <FaGem className="inline mr-2" /> Gemstone:
                                </span>{" "}
                                <span className="text-gray-600">
                                    {productById.gemstone}
                                    {productById.gemstoneCarat &&
                                        ` (${productById.gemstoneCarat}ct)`}
                                </span>
                            </div>
                        )}
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaVenusMars className="inline mr-2" /> Gender:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.gender}
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaTag className="inline mr-2" /> Occasion:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.occasion?.join(", ")}
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaTag className="inline mr-2" /> Style:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.style?.join(", ")}
                            </span>
                        </div>
                        {productById.certifications?.length > 0 && (
                            <div className="mb-2">
                                <span className="font-semibold">
                                    <FaCertificate className="inline mr-2" />{" "}
                                    Certifications:
                                </span>{" "}
                                <span className="text-gray-600">
                                    {productById.certifications.join(", ")}
                                </span>
                            </div>
                        )}
                        <div className="mb-2">
                            <span className="font-semibold">
                                <FaTruck className="inline mr-2" /> Shipping:
                            </span>{" "}
                            <span className="text-gray-600">
                                {productById.shippingDays} days
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">Stock:</span>{" "}
                            <span className="text-gray-600">
                                {productById.inStock
                                    ? `${productById.stockQty} in stock`
                                    : "Out of stock"}
                            </span>
                        </div>
                        {productById.length_cm && (
                            <div className="mb-2">
                                <span className="font-semibold">
                                    <FaRuler className="inline mr-2" /> Length:
                                </span>{" "}
                                <span className="text-gray-600">
                                    {productById.length_cm}cm
                                </span>
                            </div>
                        )}
                        {(productById.ringSizes ||
                            productById.bangleSizes_mm) && (
                            <div className="mb-4">
                                <span className="font-semibold block mb-2">
                                    Size:
                                </span>
                                {productById.ringSizes
                                    ? productById.ringSizes.map(
                                          (size, index) => (
                                              <span
                                                  key={index}
                                                  className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1 cursor-pointer hover:bg-green-700"
                                              >
                                                  {size}
                                              </span>
                                          )
                                      )
                                    : productById.bangleSizes_mm?.map(
                                          (size, index) => (
                                              <span
                                                  key={index}
                                                  className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1 cursor-pointer hover:bg-green-700"
                                              >
                                                  {size}mm
                                              </span>
                                          )
                                      )}
                            </div>
                        )}
                        <div className="mb-2">
                            <span className="font-semibold">Description:</span>{" "}
                            <span className="text-gray-600">
                                {productById.description}
                            </span>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button
                                className={`bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 ${
                                    !productById.inStock &&
                                    "opacity-50 cursor-not-allowed"
                                }`}
                                disabled={!productById.inStock}
                            >
                                Buy
                            </button>
                            <button
                                className={`bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 ${
                                    !productById.inStock &&
                                    "opacity-50 cursor-not-allowed"
                                }`}
                                disabled={!productById.inStock}
                            >
                                <FaCartPlus className="inline mr-2" /> Add To
                                Cart
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
                                <FaHeart className="inline mr-2" /> Add To
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopSingle;
