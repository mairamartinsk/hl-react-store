import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Aside from "./components/Aside/Aside";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Aside />
      </div>
    );
  }
}

export default App;
