import React, { Component } from "react";
import Button from "./../Button/Button";

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
          <Button
            onClick={this.props.addToCart}
            className="button primary add-to-cart"
            text="Add To Cart"
            icon={IconPlus}
          />
        )}
      </li>
    );
  }
}

export default Product;
