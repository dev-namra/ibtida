import React from 'react';
import Video from '../../assets/hero-video.mp4';
import { Link } from 'react-router-dom';
import Ibtida from '../../assets/Ibtida-orange.png';

const Hero = () => {
    return (
        <section id="Home" className="relative h-screen flex items-center justify-center">
            {/* Video Background */}
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Black Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Content */}
            <div className='relative z-10 text-center text-white flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center gap-4'>
                    <img src={Ibtida} alt="Little Lemon logo" className="w-36 md:w-44" />
                    <div className="text-lg md:text-3xl text-white mt-2 font-italiana px-8">Embark on a Culinary Journey Through the Royal Kitchens of Mughal India.</div>
                </div>
                <Link to="/bookings" className="bg-custom-orange hover:bg-[#111] text-[#fff] py-2 md:py-3 px-4 md:px-16 border border-custom-orange hover:border-transparent rounded-full text-center font-work-sans text-sm md:text-base font-medium">
                    Reserve a Table
                </Link>
            </div>
        </section>
    );
};

export default Hero;
