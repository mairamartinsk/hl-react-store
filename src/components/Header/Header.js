import React, { Component } from "react";
import Button from "./../Button/Button";

import IconCart from "./shopping-cart.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="site-title">
          Black<span>Wood</span>Shop
        </h1>

        <Button
          className="button inverted"
          onClick={this.props.showModal}
          icon={IconCart}
          text="View Cart"
        />
      </header>
    );
  }
}

export default Header;
