import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {HiShoppingCart} from 'react-icons/hi';

import { AppContext } from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
    const {state: {cart}} = useContext(AppContext);

    return (
    <header className="header">
        <h1 className="header-title">
            <Link to="/">Platzi Conf Merch</Link>
        </h1>
        <div className="header-checkout">
            <Link to="/checkout">
                <HiShoppingCart />
            </Link>
            {cart.length > 0 && (
                <div className="header-alert">
                    {cart.length}
                </div>
                )}
        </div>
    </header>
);}

export default Header
