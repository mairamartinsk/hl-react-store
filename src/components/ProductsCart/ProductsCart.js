import React, { Component } from "react";
import Button from "./../Button/Button";

class ProductsCart extends Component {
  showButton = () => {
    this.setState({ isHover: true });
  };

  hideButton = () => {
    this.setState({ isHover: false });
  };

  render() {
    return (
      <div className="products-cart">
        <div className="products">
          <img
            src={this.props.image}
            className="product-image"
            alt="Courtesy of Unsplash"
          />
          <div className="product-details">
            <span>Brand</span>
            <p>Gorgeous Furniture</p>
            <div className="solid"> </div> BlackWood
            <div className="change-order">
              <span>Change </span>
              <span> Delete</span>
            </div>
          </div>
        </div>

        <div className="quantity">
          <Button
            className="button bare"
            text="-"
            onClick={this.props.removeFromCart}
          />
          <Button className="button primary" text={this.props.cartItems} />
          <Button
            className="button bare"
            text="+"
            onClick={this.props.addToCart}
          />
        </div>

        <div class="price">
          <p>1750 SEK</p>
        </div>
      </div>
    );
  }
}

export default ProductsCart;
