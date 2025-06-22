import React, { useState } from 'react';
import './home.scss';
import { api } from './Provider';
import { Link } from 'react-router-dom';
import { Catalog } from './home/Catalog';
import { HomeHeader } from './home/HomeHeader';
import { MainImage } from './home/MainImage';
import { AboutUs } from './home/AboutUs';
import { Contact } from './home/Contact';

function Home() {     

    // Lógica para a contagem do carrinho
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
            <HomeHeader cartCount={cartCount}
            ></HomeHeader>
            
            <MainImage></MainImage>

            <Catalog setCartCount={setCartCount}
            ></Catalog>

            <AboutUs></AboutUs>

            <Contact></Contact>
        </>
    );
}

export default Home;
