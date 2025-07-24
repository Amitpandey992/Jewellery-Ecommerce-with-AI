import React from "react";

function Header() {
    return (
        <nav className="shadow bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <a className="text-green-600 text-2xl font-bold" href="/">
                    Zaywellery
                </a>
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <a className="hover:text-green-600" href="/">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="hover:text-green-600" href="/shop">
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
