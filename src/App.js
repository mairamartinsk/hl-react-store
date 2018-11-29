import React, { Component } from "react";
import "./components/index.scss";
import "./App.scss";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Aside from "./components/Aside/Aside";

class App extends Component {
  state = {
    imagesToDisplay: 6,
    imagePlaceholder: "https://source.unsplash.com/collection/3360193/400x400"
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Gallery
          image={this.state.imagePlaceholder}
          items={this.state.imagesToDisplay}
        />
        <Aside />
      </div>
    );
  }
}

export default App;
