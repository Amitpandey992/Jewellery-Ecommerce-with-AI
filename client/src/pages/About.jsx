import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaTruck,
    FaExchangeAlt,
    FaPercent,
    FaUser,
    FaChevronLeft,
    FaChevronRight,
    FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => (
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
        <section className="bg-green-600 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center py-8 px-4">
                <div className="flex-1 text-white mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="/assets/img/about-hero.svg"
                        alt="About Hero"
                        className="max-w-xs"
                    />
                </div>
            </div>
        </section>
        <section className="container mx-auto py-12 px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Our Services</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow flex flex-col items-center py-8">
                    <FaTruck className="text-green-600 text-4xl mb-4" />
                    <h2 className="text-lg font-semibold">Delivery Services</h2>
                </div>
                <div className="bg-white rounded-lg shadow flex flex-col items-center py-8">
                    <FaExchangeAlt className="text-green-600 text-4xl mb-4" />
                    <h2 className="text-lg font-semibold">Shipping & Return</h2>
                </div>
                <div className="bg-white rounded-lg shadow flex flex-col items-center py-8">
                    <FaPercent className="text-green-600 text-4xl mb-4" />
                    <h2 className="text-lg font-semibold">Promotion</h2>
                </div>
                <div className="bg-white rounded-lg shadow flex flex-col items-center py-8">
                    <FaUser className="text-green-600 text-4xl mb-4" />
                    <h2 className="text-lg font-semibold">24 Hours Service</h2>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-12 mt-12 rounded-lg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Our Brands</h1>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod Lorem ipsum dolor sit amet.
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
                        href="https://templatemo.com/page/1"
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

export default About;
