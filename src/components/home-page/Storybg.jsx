import React from 'react';
import { Parallax } from 'react-parallax';
import StorybgImage from '../../assets/story-image.jpg';

const Storybg = () => {
    return (
        <Parallax bgImage={StorybgImage} strength={300} className="h-screen">
        </Parallax>
    );
};

export default Storybg;
