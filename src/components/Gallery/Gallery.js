import React, { Component } from "react";
import Product from "./../Product/Product";

class Gallery extends Component {
  render() {
    const { image, items } = this.props;

    const renderProducts = () => {
      let productsArray = [];
      for (let i = 0; i < items; i++) {
        productsArray.push(<Product key={i} image={image} />);
      }

      return productsArray;
    };

    return (
      <div className="container">
        <main>
          Products:
          <ul className="gallery-grid">{renderProducts()}</ul>
        </main>
      </div>
    );
  }
}

export default Gallery;
