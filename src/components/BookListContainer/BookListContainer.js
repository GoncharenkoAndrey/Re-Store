import React, {Component} from "react";
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from "../BookList/BookList";
import withBookStoreService from "../hoc/WithBookStoreService";
import {fetchBooks, bookAddToCart} from "../../actions/actions";
import compose from "../../utils/compose";
class BookListContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}
	render () {
		const {books, loading, error, onAddToCart} = this.props;
		if(loading) {
			return <Spinner />;
		}
		if(error) {
			return <ErrorIndicator />
		}
		return <BookList books = {books} onAddToCart = {onAddToCart} />;
	}
}
const mapStateToProps = ({books, loading, error}) => {
	return {books, loading, error};
};
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddToCart: (id) => dispatch(bookAddToCart(id))
	};
};
export default compose(
	withBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps))
(BookListContainer);
