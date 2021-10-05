import React, { useEffect, useState, useContext} from "react";
import { products } from "../products";
import { Link } from "react-router-dom";
import ShopItems from "./ShopItems";
import { CartContext } from "../context/Context";

const Shop = () => {

    const contextValue = useContext(CartContext);
    const { cartState } = contextValue;
    const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

    
    useEffect(() => {
        if (cartState.length > 0) {
            const itemsQuantity = cartState.reduce((prevItem, currItem) => prevItem + currItem.quantity, 0);
            setCartItemsQuantity(itemsQuantity);
        }
        
    }, [cartState]);
    
  

    const shopItemsCollection = products.map((item) => {
        return <ShopItems
            //pass item into handleSubmit function
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