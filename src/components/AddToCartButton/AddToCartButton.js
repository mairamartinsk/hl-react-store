import React, { Component } from "react";

class AddToCartButton extends Component {
  render() {
    return (
      <button onClick={this.props.addToCart} className="add-to-cart">
        + Add To Cart
      </button>
    );
  }
}

export default AddToCartButton;
