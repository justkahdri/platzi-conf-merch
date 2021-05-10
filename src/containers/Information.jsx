import React from 'react'

import '../styles/components/Information.css'

const Information = () => (
    <div className="information">
        <div className="information-content">
            <div className="information-head">
                <h2>Informacion de contacto:</h2>
            </div>
            <div className="information-form">
                <form action="">
                    <input type="text" placeholder="Nombre completo" name="name" />
                    <input type="email" placeholder="Correo electronico" name="email" />
                    <input type="text" placeholder="Direccion" name="address" />
                    <input type="text" placeholder="Apto" name="apto" />
                    <input type="text" placeholder="Ciudad" name="city" />
                    <input type="text" placeholder="Pais" name="country" />
                    <input type="text" placeholder="Estado/Provincia" name="state" />
                    <input type="text" placeholder="Codigo Postal" name="cp" />
                    <input type="phone" placeholder="Telefono" name="phone" />
                </form>
                <div className="information-buttons">
                    <div className="information-back">
                        Regresar
                    </div>
                    <div className="information-next">
                        Pagar
                    </div>
                </div>
                <div className="information-sidebar">
                    <h3>Pedido:</h3>
                    <div className="information-item">
                        <div className="information-element">
                            <h4>ITEM name</h4>
                            <span>$10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Information;