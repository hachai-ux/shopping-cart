import React, { useState, useContext } from "react";
import { CartContext } from "../context/Context";


const ShopItems = (props) => {

 
    return (
        <div className="shop-item">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                     <li>
                        <strong>{props.description}</strong>
                    </li>
                     <li>
                        <strong>{props.price}</strong>
                    </li>
                </ul>
                <AddItemQuantity item={props.item} />
            </div>
          
        </div>
    )
}

const AddItemQuantity = (props) => {

    const contextValue = useContext(CartContext);
    const { dispatch } = contextValue;


       const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);

    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleChange = (e) => {

        setQuantity(parseInt(e.target.value));
    }

     
    

    return (
        <div className="add-item-quantity">
            <form onSubmit={(e) => dispatch({
                type: "ADD_TO_CART",
                payload: {
                    item: props.item,
                    quantity: quantity,
                    event: e
                }
                })}>
                <button onClick={decrementQuantity} type="button">-</button>
                <label htmlFor="item-quantity"></label>
                <input type="number" name="item-quantity" min="0" max="99999" value={quantity} onChange={handleChange}></input>
                <button onClick={incrementQuantity} type="button">+</button>
                <button type="submit">Add to Cart</button>
            </form>
    </div>
)

}



export default ShopItems;