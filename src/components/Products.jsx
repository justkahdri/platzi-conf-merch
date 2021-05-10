import React from 'react'
import Product from './Product';

import '../styles/components/Products.css';

const Products = ({ products }) => (
        <div className="products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )

export default Products
