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

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12">
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
                    Copyright © 2025 AmitPandey | Designed by{" "}
                    <a
                        className="text-green-600 underline"
                        href="https://www.linkedin.com/in/amit7582"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amit pandey
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
