import React, { Component } from "react";
import Button from "./../Button/Button";
import ProductsCart from "./../ProductsCart/ProductsCart";

import IconBack from "./arrow-left-circle.svg";
import IconCheckout from "./credit-card.svg";
import IconClose from "./x-circle.svg";

class Modal extends Component {
  ComponentWillUpdate() {
    this.renderProductCart();
  }

  renderProductCart = () => {
    let items = this.props.cartItems;
    let productsArray = [];

    for (let i = 0; i < items; i++) {
      productsArray.push(
        <ProductsCart
          key={i}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          cartItems={this.props.cartItems}
          cartTotal={this.props.cartTotal}
          image={this.props.image}
        />
      );
    }

    return productsArray;
  };
  render() {
    const classes = this.props.isModal
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={classes}>
        <div className="modal-container">
          <div className="modal-header">
            <h3>Your Shopping Cart</h3>

            <Button
              className="button primary"
              onClick={this.props.hideModal}
              text="Close"
              icon={IconClose}
            />
          </div>

          <div className="modal-grid">
            <div className="labels">
              <p>Product</p>
              <p className="align-center">Quantity</p>
              <p className="align-right">Price</p>
            </div>

            <div className="grid-rows">{this.renderProductCart()}</div>
          </div>

          <div className="discount">
            <p>
              10% discount on your order{" "}
              <span className="align-right">-500 SEK</span>
            </p>
            <p>
              As a first time shopper you get a discount on your first order.
            </p>
          </div>

          <div className="modal-total align-right">
            <p>Discount -500 SEK</p>
            <p>Order Total {this.props.cartTotal - 500} SEK</p>
          </div>

          <div className="modal-footer">
            <Button
              className="button primary"
              onClick={this.props.hideModal}
              text="Continue Shopping"
              icon={IconBack}
            />

            <Button
              className="button inverted"
              onClick={this.props.hideModal}
              text="Checkout"
              icon={IconCheckout}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
