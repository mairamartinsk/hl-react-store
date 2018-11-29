import React, { Component } from "react";
import Product from "./../Product/Product";

class Gallery extends Component {
  /* Get state from App, generate number of products to display */
  render() {
    return (
      <div className="container">
        <main>
          Products:
          <ul>
            <Product />
            <Product />
            <Product />
          </ul>
        </main>
      </div>
    );
  }
}

export default Gallery;
