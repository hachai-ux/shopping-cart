import { BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;