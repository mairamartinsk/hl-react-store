import React, { Component } from "react";
import CartButton from "./../CartButton/CartButton";

class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <CartButton showModal={this.props.showModal} />
      </aside>
    );
  }
}

export default Aside;
