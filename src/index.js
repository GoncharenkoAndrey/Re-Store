import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import BookStoreService from "./services/bookstore-service";
import {BookStoreServiceProvider} from "./components/BookStoreServiceContext/BookStoreServiceContext";
import store from "./store";
const bookstoreService = new BookStoreService();
ReactDOM.render(
	<Provider store = {store}>
		<ErrorBoundry>
			<BookStoreServiceProvider value = {bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookStoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
  document.getElementById('root')
);
