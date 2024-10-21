import React from "react";
import StoryBanner from '../assets/interior-bg.jpg';
import { Parallax } from 'react-parallax';
import Chef from'../assets/chef.jpg';
import IbtidaVideo from '../assets/interior-video.mp4';
import BiryaniImage from '../assets/about/top-view-pakistan-meal-composition-with-copy-space.jpg'; 
import KebabsImage from '../assets/about/high-angle-tasty-kebab-slate-with-other-dish-cutlery.jpg'; 
import NihariImage from '../assets/about/pre-prepared-food-showcasing-ready-eat-delicious-meals-go.jpg'; 

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Parallax Hero Section */}
      <Parallax bgImage={StoryBanner} strength={300} className="h-96">
        <div className="flex items-center justify-center h-full pt-16 md:pt-32">
          <div className="flex flex-col items-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white font-fraunces">Our Story</h2>
          </div>
        </div>
      </Parallax> 

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-custom-orange font-italiana mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold text-gray-800">Ibtida</span>, we take you on a culinary journey back to the golden age of the Mughal Empire.
              Our name, meaning "beginning" in Urdu, signifies our dedication to reviving and celebrating the rich traditions of Mughal cuisine.
              Each dish we serve is a masterpiece, crafted with passion and precision to bring the flavors of history to your plate.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              From the fragrant spices of the royal kitchens to the intricate recipes passed down through generations, we are committed to preserving the legacy of Mughal cuisine in its most authentic form.
              Join us as we explore the opulence, artistry, and richness of a culinary heritage that has stood the test of time.
            </p>
          </div>
          <div>
            <img src={StoryBanner} alt="Mughal Cuisine" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

       {/* Video Section */}
       <div className="bg-background-beige py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-custom-orange font-italiana mb-4">A Glimpse into Ibtida</h2>
          <div className="aspect-w-16 aspect-h-9">
            <video
              src={IbtidaVideo} // Use your imported video here
              controls
              className="w-full h-full rounded-lg shadow-lg"
              title="Ibtida Restaurant Video"
              // Add autoplay and loop if desired
              // autoPlay
              // loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Chef's Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={Chef} alt="Master Chef" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-custom-orange font-italiana mb-4">
              Meet Our Master Chef
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our head chef at <span className="font-semibold text-gray-800">Ibtida</span> is a culinary artist with decades of experience in Mughal cuisine.
              With roots deeply embedded in the royal traditions of cooking, our chef brings to life the timeless recipes of the Mughal era.
              Each dish is prepared with meticulous attention to detail, using only the freshest ingredients and the finest spices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Under his guidance, our kitchen is a place where tradition meets innovation, where every meal is crafted to perfection.
              His passion for Mughal cuisine is evident in every bite, offering you a dining experience that is truly royal.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-background-col py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-custom-orange text-center mb-8">
            Our Signature Dishes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={BiryaniImage} alt="Dish 1" className="rounded-lg shadow-lg mb-4" />
              <h3 className="text-2xl font-semibold text-custom-orange">Biryani</h3>
              <p className="text-white mt-2">Aromatic, flavorful, and cooked to perfection.</p>
            </div>
            <div className="text-center">
              <img src={KebabsImage} alt="Dish 2" className="rounded-lg shadow-lg mb-4" />
              <h3 className="text-2xl font-semibold text-custom-orange">Kebabs</h3>
              <p className="text-white mt-2">Succulent and smoky, straight from the tandoor.</p>
            </div>
            <div className="text-center">
              <img src={NihariImage} alt="Dish 3" className="rounded-lg shadow-lg mb-4" />
              <h3 className="text-2xl font-semibold text-custom-orange">Nihari</h3>
              <p className="text-white mt-2">A slow-cooked delicacy with a rich, savory flavor.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/menu"
              className="inline-block bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-yellow-700 transition-colors"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8390459463!2d77.06889949999999!3d28.5275823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce33a12bd12db%3A0x682af985b7c6eaba!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1632995565619!5m2!1sen!2sus"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              className="rounded-lg shadow-lg w-full h-48 md:h-80 lg:h-96"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
