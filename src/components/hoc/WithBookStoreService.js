import React from "react";
import {BookStoreServiceConsumer} from "../BookStoreServiceContext/BookStoreServiceContext";
const withBookStoreService = () => (Component) => {
	return (props) => {
		return (
			<BookStoreServiceConsumer>
				{
					(bookstoreService) => {
						return <Component {...props} bookstoreService = {bookstoreService} />;
					}
				}
			</BookStoreServiceConsumer>
		);
	}
};
export default withBookStoreService;