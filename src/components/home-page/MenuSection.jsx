import React from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../../assets/mughlai-cuisine.png';
import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <section>
        <div id="menu" className="section bg-background-beige">
            <div className="container mx-auto p-6">
                <div className='py-8 md:py-24'>
                <div className="justify-center mb-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-custom-orange text-center font-fraunces">Mughlai cuisine</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 restaurant-info text-center">
                    <div id="hours">
                    <h3 className="text-3xl md:text-4xl font-semibold font-fraunces py-2 md:py-4">Hours</h3>
                    <div>Tuesday - Sunday<br />8:00 am - 9:00 pm</div>
                    </div>
                    <div id="address">
                    <h3 className="text-3xl md:text-4xl font-semibold py-2 md:py-4">Address</h3>
                    <div>6th Ave, Seattle, WA 98121</div>
                    </div>
                    <div id="contact">
                    <h3 className="text-3xl md:text-4xl font-semibold py-2 md:py-4">Contact</h3>
                    <div>hello@coco.io<br />(123) 456-7890</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href="/about" className="bg-transparent hover:bg-custom-orange text-custom-orange font-semibold hover:text-background-col py-2 px-4 border border-custom-orange hover:border-transparent rounded-md mx-auto text-center font-roboto flex justify-center mt-8 md:mt-20">Make a Reservation</Link>
                </div>
                
                </div>
            </div>
            </div>
            <Parallax bgImage={Biryani} strength={300} className="h-screen">
            </Parallax>
    </section>
    

  );
};

export default MenuSection;
