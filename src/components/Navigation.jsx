import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Logo from '../assets/Ibtida.png';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to check if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-background-beige shadow-md sticky top-0 z-50">
            <nav className="container mx-auto p-4 flex justify-between items-center relative">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                    <img src={Logo} alt="Ibtida logo" className="h-6 w-auto" />
                </Link>
                <div className="md:hidden relative z-50">
                    <button onClick={toggleMenu} className="relative w-8 h-8 focus:outline-none">
                        {/* Top bar */}
                        <span
                            className={`block absolute w-8 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${
                                isOpen ? 'rotate-45 top-3.5' : 'top-2'
                            }`}
                        />
                        {/* Middle bar */}
                        <span
                            className={`block absolute w-8 h-0.5 bg-gray-700 transition-opacity duration-300 ease-in-out ${
                                isOpen ? 'opacity-0' : 'opacity-100 top-3.5'
                            }`}
                        />
                        {/* Bottom bar */}
                        <span
                            className={`block absolute w-8 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${
                                isOpen ? '-rotate-45 top-3.5' : 'top-5'
                            }`}
                        />
                    </button>
                </div>
                <ul
                    className={`flex flex-col md:flex-row md:space-x-6 items-center justify-center md:static absolute w-full md:w-auto left-0 md:left-auto bg-[#16182C] md:bg-transparent transition-transform duration-300 ease-in-out text-center ${
                        isOpen ? 'top-14 h-screen' : '-top-96'
                    } z-40`}
                >
                    <li className={`${isOpen ? '' : 'hidden md:block'}`}>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 px-4 text-custom-orange hover:text-white md:hover:text-custom-orange md:text-[#111] font-Lobster Two text-xl md:text-base ${
                                isActive('/about') ? 'underline underline-offset-4' : ''
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li className={`${isOpen ? '' : 'hidden md:block'}`}>
                        <Link
                            to="/menu"
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 px-4 text-custom-orange hover:text-white md:hover:text-custom-orange md:text-[#111] font-Lobster Two text-xl md:text-base ${
                                isActive('/menu') ? 'underline underline-offset-4' : ''
                            }`}
                        >
                            Menu
                        </Link>
                    </li>
                    <li className={`${isOpen ? '' : 'hidden md:block'}`}>
                        <Link
                            to="/bookings"
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 px-4 text-custom-orange hover:text-white md:hover:text-custom-orange md:text-[#111] font-Lobster Two text-xl md:text-base ${
                                isActive('/bookings') ? 'underline underline-offset-4' : ''
                            }`}
                        >
                            Reservations
                        </Link>
                    </li>
                    <li className={`${isOpen ? '' : 'hidden md:block'}`}>
                        <Link
                            to="/order-online"
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 px-4 text-custom-orange hover:text-white md:hover:text-custom-orange md:text-[#fff] md:bg-background-col md:rounded-full font-work-sans text-xl md:text-base ${
                                isActive('/order-online') ? 'underline underline-offset-4' : ''
                            }`}
                        >
                            Order Online
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
