import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Ibtida.png';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-background-beige shadow-md">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Little Lemon logo" className="h-8 w-auto" />
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`flex-col md:flex-row md:flex md:space-x-6 items-center md:static absolute w-full md:w-auto left-0 md:left-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'top-14' : '-top-96'}`}>
                    <li><Link to="/" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Home</Link></li>
                    <li><Link to="/about" className="block py-2 px-4 text-gray-700 hover:text-gray-900">About</Link></li>
                    <li><Link to="/menu" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Menu</Link></li>
                    <li><Link to="/bookings" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Reservations</Link></li>
                    <li><Link to="/order-online" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Order Online</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
