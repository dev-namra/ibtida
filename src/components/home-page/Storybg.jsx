import React from 'react';
import { Parallax } from 'react-parallax';
import StorybgImage from '../../assets/PLATTER.jpeg';

const Storybg = () => {
    return (
        <Parallax 
            bgImage={StorybgImage} 
            strength={200} 
            className="h-screen w-full" // Full width and height
            style={{ margin: 0, padding: 0 }} // Reset margins and paddings
            bgImageStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
            <div className="h-full"></div>
        </Parallax>

 
    );
};

export default Storybg;
