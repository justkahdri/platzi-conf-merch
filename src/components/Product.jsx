import React from 'react'

const Product = ({image, title, price, description}) => (
        <div className="products-item">
            <img src={image} alt={title} />
            <div className="products-item-info">
                <h2>{title}
                <span>$ {price}</span>
                </h2>
            <p>{description}</p>
            </div>
            <button type="button">Comprar</button>
        </div>
    )

export default Product