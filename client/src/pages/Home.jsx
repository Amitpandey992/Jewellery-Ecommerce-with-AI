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
    FaStar,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => (
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
        {/* Header */}
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
        {/* Banner Hero */}
        <div className="relative w-full overflow-hidden">
            <div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row items-center">
                <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-4xl font-bold text-green-600 mb-2">
                        Zay <span className="text-gray-900">eCommerce</span>
                    </h1>
                    <h3 className="text-2xl mb-4">
                        Tiny and Perfect eCommerce Template
                    </h3>
                    <p className="mb-4">
                        Zay Shop is an eCommerce HTML5 CSS template with latest
                        version of Bootstrap 5 (beta 1). This template is 100%
                        free provided by{" "}
                        <a
                            className="text-green-600 underline"
                            href="https://templatemo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TemplateMo
                        </a>{" "}
                        website. Image credits go to{" "}
                        <a
                            className="text-green-600 underline"
                            href="https://stories.freepik.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Freepik Stories
                        </a>
                        ,{" "}
                        <a
                            className="text-green-600 underline"
                            href="https://unsplash.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unsplash
                        </a>{" "}
                        and{" "}
                        <a
                            className="text-green-600 underline"
                            href="https://icons8.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Icons 8
                        </a>
                        .
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="rounded-lg shadow-lg max-w-xs"
                        src="/assets/img/banner_img_01.jpg"
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
        {/* Categories of The Month */}
        <section className="container mx-auto py-12 px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">
                    Categories of The Month
                </h1>
                <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-lg shadow">
                    <a href="#">
                        <img
                            src="/assets/img/category_img_01.jpg"
                            className="rounded-full border w-32 h-32 object-cover"
                            alt="Watches"
                        />
                    </a>
                    <h5 className="mt-4 mb-2 text-lg font-semibold">Watches</h5>
                    <a
                        className="btn bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        href="#"
                    >
                        Go Shop
                    </a>
                </div>
                <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-lg shadow">
                    <a href="#">
                        <img
                            src="/assets/img/category_img_02.jpg"
                            className="rounded-full border w-32 h-32 object-cover"
                            alt="Shoes"
                        />
                    </a>
                    <h5 className="mt-4 mb-2 text-lg font-semibold">Shoes</h5>
                    <a
                        className="btn bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        href="#"
                    >
                        Go Shop
                    </a>
                </div>
                <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-lg shadow">
                    <a href="#">
                        <img
                            src="/assets/img/category_img_03.jpg"
                            className="rounded-full border w-32 h-32 object-cover"
                            alt="Accessories"
                        />
                    </a>
                    <h5 className="mt-4 mb-2 text-lg font-semibold">
                        Accessories
                    </h5>
                    <a
                        className="btn bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        href="#"
                    >
                        Go Shop
                    </a>
                </div>
            </div>
        </section>
        {/* Featured Product */}
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Featured Product
                    </h1>
                    <p className="text-gray-600">
                        Reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col">
                        <a href="/shop-single">
                            <img
                                src="/assets/img/feature_prod_01.jpg"
                                className="rounded-lg mb-4"
                                alt="Gym Weight"
                            />
                        </a>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex text-yellow-400 space-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className="text-gray-300" />
                                <FaStar className="text-gray-300" />
                            </div>
                            <span className="text-gray-700 font-semibold">
                                $240.00
                            </span>
                        </div>
                        <a
                            href="/shop-single"
                            className="text-lg font-semibold hover:underline mb-2"
                        >
                            Gym Weight
                        </a>
                        <p className="text-gray-600 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <p className="text-gray-400 text-sm">Reviews (24)</p>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col">
                        <a href="/shop-single">
                            <img
                                src="/assets/img/feature_prod_02.jpg"
                                className="rounded-lg mb-4"
                                alt="Cloud Nike Shoes"
                            />
                        </a>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex text-yellow-400 space-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className="text-gray-300" />
                                <FaStar className="text-gray-300" />
                            </div>
                            <span className="text-gray-700 font-semibold">
                                $480.00
                            </span>
                        </div>
                        <a
                            href="/shop-single"
                            className="text-lg font-semibold hover:underline mb-2"
                        >
                            Cloud Nike Shoes
                        </a>
                        <p className="text-gray-600 mb-2">
                            Aenean gravida dignissim finibus. Nullam ipsum diam,
                            posuere vitae pharetra sed, commodo ullamcorper.
                        </p>
                        <p className="text-gray-400 text-sm">Reviews (48)</p>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col">
                        <a href="/shop-single">
                            <img
                                src="/assets/img/feature_prod_03.jpg"
                                className="rounded-lg mb-4"
                                alt="Summer Addides Shoes"
                            />
                        </a>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex text-yellow-400 space-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-gray-700 font-semibold">
                                $360.00
                            </span>
                        </div>
                        <a
                            href="/shop-single"
                            className="text-lg font-semibold hover:underline mb-2"
                        >
                            Summer Addides Shoes
                        </a>
                        <p className="text-gray-600 mb-2">
                            Curabitur ac mi sit amet diam luctus porta.
                            Phasellus pulvinar sagittis diam, et scelerisque
                            ipsum lobortis nec.
                        </p>
                        <p className="text-gray-400 text-sm">Reviews (74)</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
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

export default Home;
