import React from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../../assets/mughlai-cuisine.png';

const MenuSectionBannerImage = () => {
    return (
        <Parallax
        bgImage={Biryani}
        strength={200}
        className="h-96" 
        bgImageStyle={{ objectFit: 'cover', width: '100%', height: '100%' }} 
        >
        <div className="h-full"></div>
        </Parallax>
    );
};

export default MenuSectionBannerImage;
