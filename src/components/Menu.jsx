import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../assets/mughlai-cuisine.png';

const MenuPage = () => {
  const [foodMenuData, setFoodMenuData] = useState([]);
  const [drinksMenuData, setDrinksMenuData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    const fetchMenuData = async () => {
      try {
        // Fetch food menu items
        const foodResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/menu/food`);
        if (!foodResponse.ok) throw new Error('Failed to fetch food menu');
        const foodData = await foodResponse.json();
        const groupedFoodData = foodData.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = { category: item.category, items: [] };
          }
          acc[item.category].items.push(item);
          return acc;
        }, {});
        setFoodMenuData(Object.values(groupedFoodData));

        // Fetch drink menu items
        const drinkResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/menu/drink`); 
        if (!drinkResponse.ok) throw new Error('Failed to fetch drinks menu');
        const drinkData = await drinkResponse.json();
        const groupedDrinkData = drinkData.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = { category: item.category, items: [] };
          }
          acc[item.category].items.push(item);
          return acc;
        }, {});
        setDrinksMenuData(Object.values(groupedDrinkData));

      } catch (error) {
        console.error('Error fetching menu:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchMenuData();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading menu...</div>; // Loading state
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>; // Error message
  }

  return (
    <div>
      {/* Parallax Hero Section */}
      <Parallax bgImage={Biryani} strength={200} className="h-96">
        <div className="flex items-center justify-center h-full pt-16 md:pt-32">
          <div className="flex flex-col items-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white font-fraunces">Our Menu</h2>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-50"></div>
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

      {/* Parallax Hero Section */}
      <Parallax
        bgImage={Biryani}
        strength={200}
        className="h-96" 
        bgImageStyle={{ objectFit: 'cover', width: '100%', height: '100%' }} 
      >
        <div className="h-full"></div>
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
          <h3 className="text-xl font-semibold px-4">{section.category}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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
