import { HashRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";


const Routes = () => {
    return (
        <HashRouter>
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
        </HashRouter>
    )
}

export default Routes;