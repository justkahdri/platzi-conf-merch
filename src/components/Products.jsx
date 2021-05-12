import React, {useContext} from 'react'
import Product from './Product';
import {AppContext} from '../context/AppContext';

import '../styles/components/Products.css';

const Products = () => {
    const {state: {products}, addToCart} = useContext(AppContext);

    return (
        <div className="products">
            <div className="products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={newProduct => addToCart(newProduct)}/>
                ))}
            </div>
        </div>
    )}

export default Products
