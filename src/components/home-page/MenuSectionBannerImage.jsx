import React from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../../assets/mughlai-cuisine.png';

const MenuSectionBannerImage = () => {
    return (
        <Parallax
            bgImage={Biryani}
            strength={300}
            className="h-screen" 
            style={{ margin: 0, padding: 0 }} 
        >
        </Parallax>
    );
};

export default MenuSectionBannerImage;
