import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import "./app.css";
const App = () => {
	return(
		<Switch>
			<Route path = "/" component = {HomePage} exact />
			<Route path = "/cart" component = {CartPage} />
		</Switch>
	);
};
export default App;