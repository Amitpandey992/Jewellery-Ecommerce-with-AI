import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaSearch,
    FaCartArrowDown,
    FaUser,
    FaChevronCircleDown,
    FaHeart,
    FaEye,
    FaCartPlus,
    FaStar,
    FaMapMarkerAlt,
} from "react-icons/fa";

const products = [
    { img: "/assets/img/shop_01.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_02.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_03.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_04.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_05.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_06.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_07.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_08.jpg", name: "Oupidatat non", price: "$250.00" },
    { img: "/assets/img/shop_09.jpg", name: "Oupidatat non", price: "$250.00" },
];

const Shop = () => (
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
                <div className="flex items-center space-x-4">
                    <a className="hidden lg:inline" href="#">
                        <FaSearch className="text-gray-800" />
                    </a>
                    <a className="relative" href="#">
                        <FaCartArrowDown className="text-gray-800" />
                        <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs rounded-full px-1">
                            7
                        </span>
                    </a>
                    <a className="relative" href="#">
                        <FaUser className="text-gray-800" />
                        <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs rounded-full px-1">
                            +99
                        </span>
                    </a>
                </div>
            </div>
        </nav>
        <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul className="space-y-4">
                    <li>
                        <a
                            className="flex justify-between items-center text-lg font-semibold hover:underline"
                            href="#"
                        >
                            Gender <FaChevronCircleDown />
                        </a>
                        <ul className="ml-4 mt-2 space-y-1">
                            <li>
                                <a className="hover:underline" href="#">
                                    Men
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Women
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            className="flex justify-between items-center text-lg font-semibold hover:underline"
                            href="#"
                        >
                            Sale <FaChevronCircleDown />
                        </a>
                        <ul className="ml-4 mt-2 space-y-1">
                            <li>
                                <a className="hover:underline" href="#">
                                    Sport
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Luxury
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            className="flex justify-between items-center text-lg font-semibold hover:underline"
                            href="#"
                        >
                            Product <FaChevronCircleDown />
                        </a>
                        <ul className="ml-4 mt-2 space-y-1">
                            <li>
                                <a className="hover:underline" href="#">
                                    Bag
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Sweather
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Sunglass
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <main className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <ul className="flex space-x-4 mb-4 md:mb-0">
                        <li>
                            <a
                                className="text-lg font-semibold hover:underline"
                                href="#"
                            >
                                All
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg font-semibold hover:underline"
                                href="#"
                            >
                                Men's
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg font-semibold hover:underline"
                                href="#"
                            >
                                Women's
                            </a>
                        </li>
                    </ul>
                    <select className="border rounded px-3 py-2">
                        <option>Featured</option>
                        <option>A to Z</option>
                        <option>Item</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow p-4 flex flex-col"
                        >
                            <div className="relative group">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="rounded-lg mb-4 w-full h-56 object-cover"
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
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-gray-300" />
                                <FaStar className="text-gray-300" />
                            </div>
                            <p className="text-center text-lg font-bold">
                                {p.price}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-8 space-x-2">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 text-gray-700"
                        disabled
                    >
                        1
                    </button>
                    <button className="px-4 py-2 rounded bg-white border text-gray-700">
                        2
                    </button>
                    <button className="px-4 py-2 rounded bg-white border text-gray-700">
                        3
                    </button>
                </div>
                <section className="bg-gray-100 py-12 mt-12 rounded-lg">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-2">
                                Our Brands
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod Lorem ipsum
                                dolor sit amet.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[1, 2, 3, 4].map((n) => (
                                <img
                                    key={n}
                                    src={`/assets/img/brand_0${n}.png`}
                                    alt={`Brand ${n}`}
                                    className="h-20 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
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

export default Shop;
