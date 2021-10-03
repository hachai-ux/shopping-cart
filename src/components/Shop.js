import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {

    const [cartItems, setCartItems] = useState([]);
    
    return (
        
        <div>
            <Link to='/cart'>
            <button class="sticky-cart">
                {cartItems.length} Items in Cart
                </button>
            </Link>
            <h1>Shop</h1>
        </div>
    );
};


export default Shop;
