import React, { Component } from "react";

import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contactMain">
        <label id="name">{this.props.name}</label>
        <div id="phone">
          <label>Тел:</label>
          <label>{this.props.phone}</label>
        </div>
        <hr />
      </div>
    );
  }
}

export default Contact;
