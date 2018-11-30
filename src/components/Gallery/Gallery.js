import React, { Component } from "react";
import Product from "./../Product/Product";

class Gallery extends Component {
  render() {
    const { image, items, addToCart } = this.props;

    function renderProducts(callback) {
      let productsArray = [];

      for (let i = 0; i < items; i++) {
        productsArray.push(
          <Product key={i} image={image} addToCart={callback} />
        );
      }

      return productsArray;
    }

    return (
      <main className="container">
        Products:
        <button onClick={addToCart}>Test</button>
        <ul className="gallery-grid">{renderProducts(addToCart)}</ul>
      </main>
    );
  }
}

export default Gallery;
