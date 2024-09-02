import React from "react";
import Hero from "./Hero";
import Specials from './Specials';
import Story from './Story'
import Storybg from "./Storybg";
import Specialsbg from "./Specialsbg";
import MenuSectionBannerImage from "./MenuSectionBannerImage";
import Testimonials from "./Testimonials";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <MenuSectionBannerImage />
            <Story />
            <Storybg />
            <Specials />
            <Specialsbg />
        </>
    )
};

export default HomePage;