import React from 'react';
import { Parallax } from 'react-parallax';
import StorybgImage from '../../assets/PLATTER.jpeg';

const Storybg = () => {
    return (
        <Parallax 
            bgImage={StorybgImage} 
            strength={300} 
            className="h-screen w-full" 
            style={{ margin: 0, padding: 0 }} 
            bgImageStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
            <div className="h-full"></div>
        </Parallax>

 
    );
};

export default Storybg;
