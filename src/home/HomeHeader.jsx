import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeHeader = ({cartCount}) => {

    

  return (
    <header className="header">
                    <div className="container">
                        <div className="logo">
                            <img src="/img/logo.png" id="img-logo"  alt="" />
                            <p id="name-logo">Burguer & Co.</p>
                        </div>
    
                        <nav className="nav">
                            <ul>
                                <li><a href="#">Cardápio</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                                <li>
                                    <Link to="/cart">
                                        <button className="cart-btn">🛒<span id="cart-count">{cartCount}</span></button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
  )
}
