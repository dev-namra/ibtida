import React from 'react';
import { Parallax } from 'react-parallax';
import StorybgImage from '../../assets/PLATTER.jpeg';

const Storybg = () => {
    return (
        <Parallax 
            bgImage={StorybgImage} 
            strength={300} 
            className="h-screen w-full" // Full width and height
            style={{ margin: 0, padding: 0 }} // Reset margins and paddings
        >
        </Parallax>
    );
};

export default Storybg;
