import React, { useEffect, useState } from "react";
import { products } from "../products";
import { Link } from "react-router-dom";
import ShopItems from "./ShopItems";

const Shop = () => {

    const [cartItems, setCartItems] = useState([]);
    const [shopItems, setShopItems] = useState(products);
    const [cartItemsQuantity, setCartItemsQuantity] = useState(0);


    const addToCart = (item, quantity, e) => {
        e.preventDefault();
        let itemExists = false;


        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                itemExists = true;
            }
        };
        if (itemExists === true) {
            setCartItems(cartItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.quantity = cartItem.quantity + quantity;
                }
                return cartItem;

            }));
        }

        else if (itemExists === false) {
            const tempItem = item;
            tempItem.quantity = quantity;
            const newCartItems = cartItems.concat(tempItem);
            setCartItems(newCartItems);
        
            };
        
    };
    
    useEffect(() => {
        if (cartItems.length > 0) {
            const itemsQuantity = cartItems.reduce((prevItem, currItem) => prevItem + currItem.quantity, 0);
            setCartItemsQuantity(itemsQuantity);
        }
        
    }, [cartItems]);
    
  

    const shopItemsCollection = shopItems.map((item) => {
        return <ShopItems
            //pass item into handleSubmit function
            addToCart={addToCart}
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            item={item}
            
        />
    });

    return (
        
        <div>
            <Link to='/cart'>
            <button className="sticky-cart">
                {cartItemsQuantity} Items in Cart
                </button>
            </Link>
            <h1>Shop</h1>
            <div className="shop-container">{ shopItemsCollection }</div>
        </div>
       
    );
};


export default Shop;

//backlog:
//add items to cart
//show item number in cart