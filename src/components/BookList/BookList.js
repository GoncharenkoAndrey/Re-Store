import React, {Component} from "react";
import {connect} from "react-redux";
import BookListItem from "../BookListItem/BookListItem";
import withBookStoreService from "../hoc/WithBookStoreService";
import {booksLoaded} from "../../actions/actions";
import compose from "../../utils/compose";
import "./BookList.css";
class BookList extends Component {
	componentDidMount() {
		const {bookstoreService, booksLoaded} = this.props;
		const data = bookstoreService.getBooks();
		booksLoaded(data);
	}
	render () {
		const {books} = this.props;
		return (
			<ul className = "book-list">
				{
					books.map((book) => {
						return (
							<li key = {book.id}>
								<BookListItem book = {book} />
							</li>					
						);
					})
				}
			</ul>
		);
	}
}
const mapStateToProps = ({books}) => {
	return {
		books
	};
};
const mapDispatchToProps = {
	booksLoaded
};
export default compose(
	withBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps))
(BookList);