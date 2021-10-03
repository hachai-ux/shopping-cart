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
                <Route exact path="/" component={Homepage} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;