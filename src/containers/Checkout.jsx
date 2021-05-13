import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import {MdDelete} from 'react-icons/md';
import {AppContext} from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
    const {state: {cart}, removeFromCart} = useContext(AppContext);

    const finalPrice = () => cart.reduce((sum, current) => (sum + current.price), 0);

    return (
    <div className="checkout">
        <section className="checkout-content">
            {cart.length ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}

            {cart.map((product, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="checkout-item" key={idx}>
                <div className="checkout-element">
                    <h4>{product.title}</h4>
                    <span>${product.price}</span>
                </div>
                <button type='button' onClick={() => removeFromCart(product)}>
                    <MdDelete />
                </button>
            </div>
            ))}            
        </section>
        {cart.length && (
            <section className="checkout-sidebar">
                <h3>{`Precio Total: $${finalPrice()}`}</h3>
                <Link to="/checkout/info">
                    <button type="button">Continuar pedido</button>
                </Link>
            </section>
        )}
    </div>
);}

export default Checkout;