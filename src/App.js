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
    displayModal: false
  };

  showModal = () => {
    this.setState({ displayModal: true });
  };

  hideModal = () => {
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Modal hideModal={this.hideModal} showModal={this.state.displayModal} />
        <Gallery
          image={this.state.imagePlaceholder}
          items={this.state.imagesToDisplay}
        />
        <Aside showModal={this.showModal} />
      </div>
    );
  }
}

export default App;
