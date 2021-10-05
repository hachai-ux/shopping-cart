export const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

            action.payload.event.preventDefault();
            let itemExists = false;


            for (let i = 0; i < cartState.length; i++) {
                if (cartState[i].id === action.payload.item.id) {
                    itemExists = true;
                }
            };
            
            if (itemExists === true) {
                return cartState.map(cartItem => {
                    if (cartItem.id === action.payload.item.id) {
                        cartItem.quantity = cartItem.quantity + action.payload.quantity;
                    }
                    return cartItem;
                });
            }

            else if (itemExists === false) {
                const cartItem = action.payload.item;
                cartItem.quantity = action.payload.quantity;
                const newCartItems = cartState.concat(cartItem);
                return newCartItems;
        
            };

            break;
        
        case "REMOVE_FROM_CART":
            return cartState.filter(item => item.id !== action.payload.id);


        default: return cartState;
    }
};