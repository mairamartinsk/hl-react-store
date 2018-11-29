import React, { Component } from "react";
import "./components/index.scss";
import "./App.scss";

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Aside from "./components/Aside/Aside";

class App extends Component {
  state = {
    imagesToDisplay: 6,
    imagePlaceholder: "https://source.unsplash.com/collection/3360193/400x400",
    displayModal: false,
    cartItems: 0
  };

  showModal = () => {
    this.setState({ displayModal: true });
  };

  hideModal = () => {
    this.setState({ displayModal: false });
  };

  addToCart = () => {
    this.setState(state => {
      return { cartItems: state.cartItems + 1 };
    });
  };

  removeFromCart = () => {
    this.setState(state => {
      return { cartItems: state.cartItems - 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.displayModal && (
          <Modal
            hideModal={this.hideModal}
            cartItems={this.state.cartItems}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        )}
        <Gallery
          image={this.state.imagePlaceholder}
          items={this.state.imagesToDisplay}
          cartItems={this.state.cartItems}
          addToCart={this.addToCart}
        />
        <Aside showModal={this.showModal} cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default App;
