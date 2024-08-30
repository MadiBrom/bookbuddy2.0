import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {/* Your cart content goes here */}

      {/* Example button to navigate to SingleBook page */}
      <Link to="/singlebook">
        <button className="view-book-button">View Book</button>
      </Link>
    </div>
  );
};

export default Cart;
