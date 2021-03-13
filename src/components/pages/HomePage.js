import React from "react";
import BookListContainer from "../BookListContainer/BookListContainer";
import ShoppingCartTable from "../ShoppingCartTable/ShoppingCartTable";
const HomePage = () => {
	return (
		<div>
			<BookListContainer />
			<ShoppingCartTable />
		</div>
	);
};
export default HomePage;
