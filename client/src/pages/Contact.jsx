import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => (
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
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600">
                    Proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center mb-12">
            <span className="text-gray-500">[Map Placeholder]</span>
        </div>
        <div className="container mx-auto py-12 px-4">
            <form className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="block mb-1 font-semibold"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded px-3 py-2"
                            placeholder="Name"
                        />
                    </div>
                    <div className="flex-1">
                        <label
                            htmlFor="email"
                            className="block mb-1 font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded px-3 py-2"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block mb-1 font-semibold"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Subject"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-1 font-semibold"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Message"
                        rows={8}
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Let’s Talk
                    </button>
                </div>
            </form>
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

export default Contact;
