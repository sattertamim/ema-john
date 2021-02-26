/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import fakeData from '../../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

function shop() {
    const first10 = fakeData.slice(0,10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handelAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
           <div className="product-container">
            
              {
                products.map(pd => <Product
                     handelAddProduct = {handelAddProduct}
                      product={pd}>
                      </Product>)
              }
            
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
           
        </div>
    );
}

export default shop;