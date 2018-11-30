import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, onClick, icon, className } = this.props;

    return (
      <button onClick={onClick} className={className}>
        {icon && (
          <span>
            <img src={icon} aria-hidden="true" alt="" />
          </span>
        )}
        {text}
      </button>
    );
  }
}

export default Button;
