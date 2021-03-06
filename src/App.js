import React, { Component } from "react";
import "./components/index.scss";
import "./App.scss";

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

class App extends Component {
  state = {
    imagesToDisplay: 6,
    imagePlaceholder: "https://source.unsplash.com/collection/3360193/400x400",
    isModal: false,
    cartItems: 0,
    cartTotal: 0
  };

  showModal = () => {
    this.setState({ isModal: true });
  };

  hideModal = () => {
    this.setState({ isModal: false });
  };

  addToCart = () => {
    this.setState(state => {
      return { cartItems: state.cartItems + 1 };
    });
    this.updateCartTotal();
  };

  removeFromCart = () => {
    this.setState(state => {
      return { cartItems: state.cartItems - 1 };
    });
    this.updateCartTotal();
  };

  updateCartTotal = () => {
    this.setState(state => {
      return { cartTotal: state.cartItems * 1750 };
    });
  };

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} />
        <Modal
          isModal={this.state.isModal}
          hideModal={this.hideModal}
          cartItems={this.state.cartItems}
          cartTotal={this.state.cartTotal}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          image={this.state.imagePlaceholder}
        />
        <Gallery
          image={this.state.imagePlaceholder}
          items={this.state.imagesToDisplay}
          cartItems={this.state.cartItems}
          addToCart={this.addToCart.bind(this)}
        />
      </div>
    );
  }
}

export default App;
