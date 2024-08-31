import React from "react";
import Hero from "./Hero";
import Specials from './Specials';
import Story from './Story'
import Storybg from "./Storybg";
import Specialsbg from "./Specialsbg";
import MenuSection from "./MenuSection";

const HomePage = () => {
    return (
        <>
            <Hero />
            <MenuSection />
            <Story />
            <Storybg />
            <Specials />
            <Specialsbg />
        </>
    )
};

export default HomePage;