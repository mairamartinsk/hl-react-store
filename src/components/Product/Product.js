import React, { Component } from "react";
import AddToCartButton from "./../AddToCartButton/AddToCartButton";

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
          <AddToCartButton addToCard={this.props.addToCard} />
        )}
      </li>
    );
  }
}

export default Product;
