import React from 'react';
import {connect} from "react-redux";
import './ShoppingCartTable.css';
const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, name, count, total} = item;
    return (
      <tr>
            <td>{idx}</td>
            <td>{name}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
              <button
                className="btn btn-outline-danger btn-sm float-right"
                onClick = {() => onDelete(id)}>
                <i className="fa fa-trash-o" />
              </button>
              <button
                className="btn btn-outline-success btn-sm float-right"
                onClick = {() => onIncrease(id)}>
                <i className="fa fa-plus-circle" />
              </button>
              <button
                className="btn btn-outline-warning btn-sm float-right"
                onClick = {() => onDecrease(id)}>
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};
const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};
const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {},
    onDecrease: (id) => {},
    onDelete: (id) => {}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
