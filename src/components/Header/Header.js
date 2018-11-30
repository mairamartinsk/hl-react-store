import React, { Component } from "react";
import CartButton from "./../CartButton/CartButton";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>BlackWood</h1>
        <CartButton showModal={this.props.showModal} />
      </header>
    );
  }
}

export default Header;
