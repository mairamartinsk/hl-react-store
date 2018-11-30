import React, { Component } from "react";
import IconPlus from "./plus-square.svg";

class Product extends Component {
  state = {
    isHover: false
  };

  showButton = () => {
    this.setState({ isHover: true });
  };

  hideButton = () => {
    this.setState({ isHover: false });
  };
  render() {
    return (
      <li
        className="product"
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        <img
          src={this.props.image}
          className="product-image"
          alt="Courtesy of Unsplash"
        />
        {this.state.isHover && (
          <button onClick={this.props.addToCart} className="add-to-cart">
            <span>
              <img src={IconPlus} aria-hidden="true" />
            </span>{" "}
            Add To Cart
          </button>
        )}
      </li>
    );
  }
}

export default Product;
