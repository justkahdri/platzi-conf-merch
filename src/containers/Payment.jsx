import React from 'react'

import '../styles/components/Payment.css';

const Payment = () => (
    <section className="payment">
        <div className="payment-content">
            <h3>Resumen del pedido:</h3>
            <div className="payment-button">
                Boton de pago con Paypal
            </div>
        </div>
    </section>
);

export default Payment;