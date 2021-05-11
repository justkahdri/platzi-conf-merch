import React from 'react'

import '../styles/components/Success.css';

const Success = () => (
    <section className="success">
        <div className="success-content">
            <h2>Oscar, Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias a tu direccion:</span>
            <div className="success-map">
                Google Maps
            </div>
        </div>
    </section>
);

export default Success;