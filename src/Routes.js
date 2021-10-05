import { BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";


const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/shop">
                    <Shop />    
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;