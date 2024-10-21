import React from 'react';
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import SpecialImage from '../../assets/interior-bg.jpg';

const Specialsbg = () => {
    return (
        <Parallax bgImage={SpecialImage} strength={300} className="h-screen">
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col items-center mb-8 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-white font-fraunces">Ibtida</h2>
                    <div className="text-lg md:text-3xl italic text-white mt-2">Mughal Dining Experience</div>
                    <Link to='/bookings'><button type='button' className="mt-8 inline-block border-2 border-white text-white py-2 px-4 md:px-20 rounded-full hover:bg-white hover:text-black transition">Make a Reservation</button></Link>
                </div>
            </div>
        </Parallax> 
    );
};

export default Specialsbg;
