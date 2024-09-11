
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderOnline() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await axios.get('http://localhost:5000/api/menu-items');
      setMenuItems(res.data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h1>Order Online</h1>
      {menuItems.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default OrderOnline;