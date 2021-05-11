import React from 'react';
import {Link} from 'react-router-dom';

import {HiShoppingCart} from 'react-icons/hi';
import '../styles/components/Header.css';

const Header = () => (
    <header className="header">
        <h1 className="header-title">
            <Link to="/">Platzi Conf Merch</Link>
        </h1>
        <div className="header-checkout">
            <Link to="/checkout">
                <HiShoppingCart />
            </Link>
        </div>
    </header>
);

export default Header
