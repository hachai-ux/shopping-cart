import { createContext, useReducer } from 'react';
import { cartReducer } from "./Reducers";

const CartContext = createContext();
    
const Context = ({ children }) => {
    


    const [cartState, dispatch] = useReducer(cartReducer, []
    );

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context;

//export context
export { CartContext };
