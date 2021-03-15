const booksRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUEST"
	};
};
const booksLoaded = (newBooks) => {
	return {
		type: "FETCH_BOOKS_SUCCESS",
		payload: newBooks
	};
};
const booksError = (error) => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error
	};
};
const bookAddToCart = (bookId) => {
	return {
		type: "BOOK_ADD_TO_CART",
		payload: bookId
	};
};
const bookRemoveFromCart = (bookId) => {
	return {
		type: "BOOK_REMOVE_FROM_CART",
		payload: bookId
	};
};
const allBooksRemoveFromCart = (bookId) => {
	return {
		type: "ALL_BOOKS_REMOVE_FROM_CART",
		payload: bookId
	};
};
const fetchBooks = (bookstoreService, dispatch) => () => {
	dispatch(booksRequested());
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((error) => dispatch(booksError(error)));
};
export {
	fetchBooks,
	bookAddToCart,
	bookRemoveFromCart,
	allBooksRemoveFromCart
};
