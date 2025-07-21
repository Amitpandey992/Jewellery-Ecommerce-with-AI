import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaChevronLeft,
    FaChevronRight,
    FaStar,
    FaHeart,
    FaEye,
    FaCartPlus,
    FaMapMarkerAlt,
} from "react-icons/fa";

const product = {
    name: "Active Wear",
    price: "$25.00",
    image: "/assets/img/product_single_10.jpg",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    brand: "Easy Wear",
    color: "White / Black",
    specification: [
        "Lorem ipsum dolor sit",
        "Amet, consectetur",
        "Adipiscing elit,set",
        "Duis aute irure",
        "Ut enim ad minim",
        "Dolore magna aliqua",
        "Excepteur sint",
    ],
    rating: 4,
    reviews: 36,
};

const related = [
    {
        img: "/assets/img/shop_08.jpg",
        name: "Red Clothing",
        price: "$20.00",
        rating: 4,
    },
    {
        img: "/assets/img/shop_09.jpg",
        name: "White Shirt",
        price: "$25.00",
        rating: 3,
    },
    {
        img: "/assets/img/shop_10.jpg",
        name: "Oupidatat non",
        price: "$45.00",
        rating: 5,
    },
    {
        img: "/assets/img/shop_11.jpg",
        name: "Black Fashion",
        price: "$60.00",
        rating: 4,
    },
];

const ShopSingle = () => (
    <div>
        <nav className="hidden lg:block bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between py-2 px-4">
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="mx-2" />
                    <a
                        className="hover:underline"
                        href="mailto:info@company.com"
                    >
                        info@company.com
                    </a>
                    <FaPhone className="mx-2" />
                    <a className="hover:underline" href="tel:010-020-0340">
                        010-020-0340
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://fb.com/templatemo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </nav>
        <nav className="shadow bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <a className="text-green-600 text-2xl font-bold" href="/">
                    Zay
                </a>
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <a className="hover:text-green-600" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-600" href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-600" href="/shop">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-600" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/5 flex flex-col items-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg shadow mb-4 w-full max-w-xs"
                    />
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <button className="p-2">
                            <FaChevronLeft />
                        </button>
                        {[1, 2, 3].map((n) => (
                            <img
                                key={n}
                                src={`/assets/img/product_single_0${n}.jpg`}
                                alt="thumb"
                                className="w-16 h-16 object-cover rounded border"
                            />
                        ))}
                        <button className="p-2">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow p-8">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-2xl text-green-600 mb-4">
                        {product.price}
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={
                                    i < product.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                }
                            />
                        ))}
                        <span className="ml-2 text-gray-600">
                            Rating 4.8 | {product.reviews} Comments
                        </span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Brand:</span>{" "}
                        <span className="text-gray-600">{product.brand}</span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Available Color:</span>{" "}
                        <span className="text-gray-600">{product.color}</span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Description:</span>{" "}
                        <span className="text-gray-600">
                            {product.description}
                        </span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Specification:</span>
                        <ul className="list-disc ml-6 text-gray-600">
                            {product.specification.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                    <form className="mt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <span className="font-semibold">Size:</span>
                                <span className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1">
                                    S
                                </span>
                                <span className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1">
                                    M
                                </span>
                                <span className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1">
                                    L
                                </span>
                                <span className="ml-2 inline-block bg-green-600 text-white rounded px-2 py-1">
                                    XL
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold mr-2">
                                    Quantity
                                </span>
                                <button
                                    type="button"
                                    className="bg-green-600 text-white rounded px-2"
                                >
                                    -
                                </button>
                                <span className="mx-2">1</span>
                                <button
                                    type="button"
                                    className="bg-green-600 text-white rounded px-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                            >
                                Buy
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                            >
                                Add To Cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h4 className="text-xl font-bold mb-6">Related Products</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {related.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow p-4 flex flex-col"
                        >
                            <div className="relative group">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="rounded-lg mb-4 w-full h-40 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition">
                                    <a
                                        href="/shop-single"
                                        className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
                                    >
                                        <FaHeart />
                                    </a>
                                    <a
                                        href="/shop-single"
                                        className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
                                    >
                                        <FaEye />
                                    </a>
                                    <a
                                        href="/shop-single"
                                        className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
                                    >
                                        <FaCartPlus />
                                    </a>
                                </div>
                            </div>
                            <a
                                href="/shop-single"
                                className="text-lg font-semibold hover:underline mb-2"
                            >
                                {p.name}
                            </a>
                            <div className="flex justify-center space-x-1 mb-2">
                                {[...Array(5)].map((_, j) => (
                                    <FaStar
                                        key={j}
                                        className={
                                            j < p.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }
                                    />
                                ))}
                            </div>
                            <p className="text-center text-lg font-bold">
                                {p.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <footer className="bg-gray-900 text-white pt-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <h2 className="text-green-600 text-2xl font-bold mb-4">
                            Zay Shop
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <FaMapMarkerAlt className="mr-2 inline" />
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <FaPhone className="mr-2 inline" />
                                <a
                                    className="hover:underline"
                                    href="tel:010-020-0340"
                                >
                                    010-020-0340
                                </a>
                            </li>
                            <li>
                                <FaEnvelope className="mr-2 inline" />
                                <a
                                    className="hover:underline"
                                    href="mailto:info@company.com"
                                >
                                    info@company.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Products
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <a className="hover:underline" href="#">
                                    Luxury
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Sport Wear
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Men's Shoes
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Women's Shoes
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Popular Dress
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Gym Accessories
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Sport Shoes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Further Info
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <a className="hover:underline" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Shop Locations
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-4">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a
                            className="border border-gray-700 rounded-full p-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://facebook.com/"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            className="border border-gray-700 rounded-full p-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="border border-gray-700 rounded-full p-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className="border border-gray-700 rounded-full p-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <form className="flex">
                            <input
                                type="text"
                                className="bg-gray-900 border border-gray-700 rounded-l px-4 py-2 text-white"
                                placeholder="Email address"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 text-white rounded-r px-4 py-2 hover:bg-green-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-gray-400 text-sm mt-8 pb-4">
                    Copyright © 2021 Company Name | Designed by{" "}
                    <a
                        className="text-green-600 underline"
                        href="https://templatemo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TemplateMo
                    </a>
                </div>
            </div>
        </footer>
    </div>
);

export default ShopSingle;
