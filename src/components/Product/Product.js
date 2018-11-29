import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <li className="product">
        <img
          src={this.props.image}
          className="product-image"
          alt="Courtesy of Unsplash"
        />
      </li>
    );
  }
}

export default Product;
