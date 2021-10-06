import { createContext, useReducer } from 'react';
import { cartReducer } from "./Reducers";

const CartContext = createContext();
    
const Context = ({ children }) => {
    

    //useReducer will help manage state via a reducer function
    const [cartState, dispatch] = useReducer(cartReducer, []
    );

    return (
        //provide values for context, values managed by reducer
        <CartContext.Provider value={{ cartState, dispatch }}>
            {/* provider wraps around children  */}
            {children}
        </CartContext.Provider>
    )
}

export default Context;

//export context
export { CartContext };
