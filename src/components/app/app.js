import React from "react";
import {Switch, Route} from "react-router-dom";
import ShopHeader from "../ShopHeader/ShopHeader";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import "./app.css";
const App = () => {
	return (
		<div>
			<ShopHeader numItems={5} total={210}/>
			<Switch>
				<Route path = "/" component = {HomePage} exact />
				<Route path = "/cart" component = {CartPage} />
			</Switch>
		</div>
	);
};
export default App;
