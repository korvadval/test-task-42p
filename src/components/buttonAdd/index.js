import React, { Component } from "react";

import "./buttonAdd.css";

class ButtonAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className="buttonAdd" onClick={() => this.props.showDialog()}>
        Добавить контакт
      </button>
    );
  }
}
export default ButtonAdd;
