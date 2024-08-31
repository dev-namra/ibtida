import React from 'react';
import Video from '../../assets/hero-video.mp4';
import { Link } from 'react-router-dom';
import Ibtida from '../../assets/Ibtida-white.png'

const Hero = () => {
    return (
        <section id="Home" className="h-screen flex">
                <div className='bg-background-col w-full md:w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col items-start gap-8 md:gap-20'>
                        <div className='flex flex-col items-start gap-4'>
                            <img src={Ibtida} alt="Little Lemon logo" className="w-36 md:w-44" />
                            <div className="text-lg md:text-3xl italic text-custom-orange mt-2">Mughal Dining Experience</div>
                        </div>
                        <Link href="/about" className="bg-transparent hover:bg-custom-orange text-custom-orange font-semibold hover:text-background-col py-2 px-4 border border-custom-orange hover:border-transparent rounded-md text-center font-roboto">Food Menu</Link>
                    </div>
                </div>
                <video className="w-full md:w-1/2 object-cover" autoPlay loop muted >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </section>
    );
};

export default Hero;
