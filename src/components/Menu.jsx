import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../assets/mughlai-cuisine.png';
import MenuSectionBanner from './home-page/MenuSectionBanner';

const MenuPage = () => {
  const [foodMenuData, setFoodMenuData] = useState([]);
  const [drinksMenuData, setDrinksMenuData] = useState([]);

  useEffect(() => {
    // Fetch food menu items
    fetch(`${process.env.REACT_APP_API_URL}/api/menu/food`)
      .then(response => response.json())
      .then(data => {
        const groupedData = data.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = { category: item.category, items: [] };
          }
          acc[item.category].items.push(item);
          return acc;
        }, {});
        setFoodMenuData(Object.values(groupedData));
      })
      .catch(error => console.error('Error fetching food menu:', error));


    // Fetch drink menu items
    fetch(`${process.env.REACT_APP_API_URL}/api/menu/food`)
      .then(response => response.json())
      .then(data => {
        // Group the data by category
        const groupedData = data.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = { category: item.category, items: [] };
          }
          acc[item.category].items.push(item);
          return acc;
        }, {});
        setDrinksMenuData(Object.values(groupedData));
      })
      .catch(error => console.error('Error fetching drinks menu:', error));
  }, []);

  return (
    <div>
      {/* Parallax Hero Section */}
      <Parallax bgImage={Biryani} strength={300} className="h-96">
        <div className="flex items-center justify-center h-full pt-16 md:pt-32">
          <div className="flex flex-col items-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white font-fraunces">Our Menu</h2>
          </div>
        </div>
      </Parallax> 

      {/* Food Menu Section */}
      <div id="menu" className="bg-white py-16">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-orange-600">Food Menu</h2>
          </div>

          {/* Food Menu Items */}
          <MenuSection data={foodMenuData} />

          {/* Drinks Menu Section */}
          <div className="text-center mt-16 mb-10">
            <h2 className="text-3xl font-bold text-orange-600">Drinks Menu</h2>
          </div>

          {/* Drinks Menu Items */}
          <MenuSection data={drinksMenuData} />
        </div>
      </div>

      <MenuSectionBanner />

      {/* Parallax Hero Section */}
      <Parallax bgImage={Biryani} strength={300} className="h-96">
      </Parallax> 
    </div>
  );
};

// MenuSection Component
const MenuSection = ({ data }) => {
  return (
    <>
      {data.map((section, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-semibold">{section.category}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

// MenuItem Component
const MenuItem = ({ title, price, description }) => {
  return (
    <div className="flex justify-between border-b py-2">
      <div>
        <div className="font-semibold">{title}</div>
        {description && <div className="text-sm text-gray-500">{description}</div>}
      </div>
      <div className="font-semibold text-gray-700">₹{price}</div>
    </div>
  );
};

export default MenuPage;