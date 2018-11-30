import React, { Component } from "react";
import IconBack from "./arrow-left-circle.svg";
import IconCheckout from "./credit-card.svg";
import IconClose from "./x-circle.svg";

class Modal extends Component {
  render() {
    const classes = this.props.isModal
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={classes}>
        <div className="modal-container">
          <div className="modal-header">
            <h3>Your Shopping Cart</h3>

            <button onClick={this.props.hideModal} className="modal-close">
              Close
              <span>
                <img src={IconClose} aria-hidden="true" alt="" />
              </span>
            </button>
          </div>

          <button onClick={this.props.addToCart}>+</button>
          <p>Items on cart: {this.props.cartItems}</p>
          <button onClick={this.props.removeFromCart}>-</button>

          <ul>
            <li>item 1</li>
            <li>item 2</li>
          </ul>

          <button onClick={this.props.hideModal} className="modal-close">
            <span>
              <img src={IconBack} aria-hidden="true" alt="" />
            </span>
            Continue Shopping
          </button>

          <button onClick={this.props.hideModal} className="modal-close">
            <span>
              <img src={IconCheckout} aria-hidden="true" alt="" />
            </span>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
