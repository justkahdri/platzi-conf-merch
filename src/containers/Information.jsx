import React, {useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

import '../styles/components/Information.css'

const Information = () => {
    const {state: {cart}, addToBuyer} = useContext(AppContext);
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer);
    }

    return (
    <div className="information">
        <div className="information-content">
            <div className="information-head">
                <h2>Informacion de contacto:</h2>
            </div>
            <div className="information-form">
                <form ref={form}>
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
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="information-next">
                        <button type="button" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
                <div className="information-sidebar">
                    <h3>Pedido:</h3>
                    {cart.map(item => (
                        <div key={item.title} className="information-item">
                            <div className="information-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);}

export default Information;