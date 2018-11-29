import React, { Component } from "react";

class Modal extends Component {
  render() {
    const classes = this.props.showModal
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={classes}>
        <button onClick={this.props.hideModal}>close</button>
        <p>Modal!!!</p>
      </div>
    );
  }
}

export default Modal;
