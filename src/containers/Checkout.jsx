import React from 'react'

import '../styles/components/Checkout.css';

const Checkout = () => (
    <div className="checkout">
        <section className="checkout-content">
            <h3>Lista de Pedidos:</h3>
            <div className="checkout-item">
                <div className="checkout-element">
                    <h4>ITEM NAME</h4>
                    <span>$10</span>
                </div>
                <button type='button'>Eliminar</button>
            </div>
        </section>
        <section className="checkout-sidebar">
            <h3>Precio Total: $10</h3>
            <button type="button">Continuar pedido</button>
        </section>
    </div>
);

export default Checkout;