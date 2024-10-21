import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Ibtida.png';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-background-beige shadow-md sticky top-0 z-50">
            <nav className="container mx-auto p-4 flex justify-between items-center relative">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Ibtida logo" className="h-6 w-auto" />
                </Link>
                <div className="md:hidden relative z-50">
                    <button onClick={toggleMenu} className="flex flex-col justify-center items-center focus:outline-none">
                        <span className={`block w-8 h-1 bg-gray-700 mb-1 transition duration-200 ${isOpen ? 'rotate-45 transform' : ''}`} />
                        <span className={`block w-8 h-1 bg-gray-700 mb-1 transition duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`block w-8 h-1 bg-gray-700 transition duration-200 ${isOpen ? '-rotate-45 transform' : ''}`} />
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row md:flex md:space-x-6 items-center justify-between md:static absolute w-full md:w-auto left-0 md:left-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out text-center ${isOpen ? 'top-14 h-screen' : '-top-96'} z-40`}>
                    <li className={`flex-grow ${isOpen ? 'flex items-center justify-center' : 'hidden md:block'}`}>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block py-4 px-4 text-gray-700 hover:bg-gray-300 font-work-sans text-xl md:text-base">About</Link>
                    </li>
                    <li className={`flex-grow ${isOpen ? 'flex items-center justify-center' : 'hidden md:block'}`}>
                        <Link to="/menu" onClick={() => setIsOpen(false)} className="block py-4 px-4 text-gray-700 hover:bg-gray-300 font-work-sans text-xl md:text-base">Menu</Link>
                    </li>
                    <li className={`flex-grow ${isOpen ? 'flex items-center justify-center' : 'hidden md:block'}`}>
                        <Link to="/bookings" onClick={() => setIsOpen(false)} className="block py-4 px-4 text-gray-700 hover:bg-gray-300 font-work-sans text-xl md:text-base">Reservations</Link>
                    </li>
                    <li className={`flex-grow ${isOpen ? 'flex items-center justify-center' : 'hidden md:block'}`}>
                        <Link to="/order-online" onClick={() => setIsOpen(false)} className="block py-4 px-4 text-gray-700 hover:bg-gray-300 md:text-[#fff] md:hover:text-custom-orange md:bg-background-col md:rounded-full font-work-sans text-xl md:text-base">Order Online</Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Navigation;
