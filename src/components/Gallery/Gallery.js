import React, { Component } from "react";
import Product from "./../Product/Product";

class Gallery extends Component {
  render() {
    const { image, items, addToCart } = this.props;

    const renderProducts = () => {
      let productsArray = [];
      for (let i = 0; i < items; i++) {
        productsArray.push(
          <Product key={i} image={image} addToCart={addToCart} />
        );
      }

      return productsArray;
    };

    return (
      <main className="container">
        Products:
        <ul className="gallery-grid">{renderProducts()}</ul>
      </main>
    );
  }
}

export default Gallery;
