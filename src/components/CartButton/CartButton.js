import React, { Component } from "react";

class CartButton extends Component {
  render() {
    return <button onClick={this.props.showModal}>Cart Button</button>;
  }
}

export default CartButton;
