import React, { useState } from "react";
import { products } from "../products";
import { Link } from "react-router-dom";
import ShopItems from "./ShopItems";

const Shop = () => {

    const [cartItems, setCartItems] = useState([]);
    const [shopItems, setShopItems] = useState(products);


    const handleClick = () => {

    };
    
    const shopItemsCollection = shopItems.map((item) => {
        return <ShopItems
            handleClick={handleClick}
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            
        />
    });

    return (
        
        <div>
            <Link to='/cart'>
            <button class="sticky-cart">
                {cartItems.length} Items in Cart
                </button>
            </Link>
            <h1>Shop</h1>
            <div className="shop-container">{ shopItemsCollection }</div>
        </div>
       
    );
};


export default Shop;
