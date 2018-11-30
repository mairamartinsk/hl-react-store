import React, { Component } from "react";
import IconCart from "./shopping-cart.svg";

class CartButton extends Component {
  render() {
    return (
      <button onClick={this.props.showModal} className="cart-button">
        <span>
          <img src={IconCart} aria-hidden="true" />
        </span>{" "}
        View Cart
      </button>
    );
  }
}

export default CartButton;
