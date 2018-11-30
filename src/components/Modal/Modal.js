import React, { Component } from "react";

class Modal extends Component {
  render() {
    const classes = this.props.isModal
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={classes}>
        <button onClick={this.props.hideModal}>close</button>
        <p>Modal!!!</p>
        <p>Items on cart: {this.props.cartItems}</p>
        <button onClick={this.props.addToCart}>add to cart</button>
        <button onClick={this.props.removeFromCart}>remove from cart</button>
      </div>
    );
  }
}

export default Modal;
