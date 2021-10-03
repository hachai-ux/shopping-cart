import React from "react";

const ShopItems = (props) => {
    return (
        <div className="shop-item" onClick={() => props.handleClick(props.id)}>
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
            </div>
          
        </div>
    )
}

export default ShopItems;