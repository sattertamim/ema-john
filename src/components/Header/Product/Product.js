import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small>Only {stock} left in stock.Order soon.......</small></p>
                <button className="main-button" 
                onClick = {() => props.handelAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add To cart</button>
            </div>

        </div>
    );
};

export default Product;