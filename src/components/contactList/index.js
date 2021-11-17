import React, { Component } from "react";
import Contact from "../contact";
import ButtonAdd from "../buttonAdd";
import ModalWindow from "../modalWindow";

import "./contactList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      needDialog: false,
    };
  }

  showDialog() {
    this.setState({ needDialog: true });
  }

  hideDialog() {
    this.setState({ needDialog: false });
  }

  componentDidMount() {
    let listFromLS = JSON.parse(localStorage.getItem("contacts")) || [];
    this.setState({ contacts: listFromLS });
  }

  addContact = (el) => {
    let buf = this.state.contacts;
    buf.push(el);
    this.setState({ contacts: buf });
  };

  fillList() {
    let contactList = [];
    if (this.state.contacts) {
      this.state.contacts.map((el, i) => {
        contactList.push(
          <Contact name={el.name} phone={el.phone} key={i}></Contact>
        );
      });
    }
    return contactList;
  }
  render() {
    return (
      <div className="tableContactList">
        {this.fillList()}
        <ButtonAdd showDialog={() => this.showDialog()}></ButtonAdd>
        {this.state.needDialog ? (
          <ModalWindow
            addContact={this.addContact}
            hideDialog={() => this.hideDialog()}
          ></ModalWindow>
        ) : null}
      </div>
    );
  }
}

export default ContactList;
