import React, { Component } from "react";
import "./modalWindow.css";

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  setError(warning) {
    this.setState({ error: warning });
    setTimeout(() => {
      this.setState({ error: null });
    }, 3000);
  }

  addContact = (event) => {
    event.preventDefault();
    let re = /^\+[\d]{11}$/;
    let contactName = event.target.children[1].value;
    let contactPhone = event.target.children[3].value;
    if (contactName && contactPhone) {
      //testing phone with regulars
      if (re.test(contactPhone)) {
        let contactList = JSON.parse(localStorage.getItem("contacts")) || [];
        let newContact = { name: contactName, phone: contactPhone };
        contactList.push(newContact);

        localStorage.setItem("contacts", JSON.stringify(contactList));
        this.props.addContact(newContact);
        this.props.hideDialog();
      } else {
        this.setError("Неверный формат номера!");
      }
    } else {
      if (!contactName) {
        this.setError("Поле ФИО не может быть пустым!");
      } else {
        this.setError("Поле Тел не может быть пустым!");
      }
    }
  };

  render() {
    return (
      <div className="backgroundModal" onMouseDown={this.props.hideDialog}>
        <div
          className="containerModal"
          onMouseDown={function (e) {
            e.stopPropagation();
          }}
        >
          <form className="addForm" onSubmit={this.addContact}>
            <label>ФИО:</label>
            <input type="text" placeholder="Иванов Иван Иванович" />
            <label>Номер:</label>
            <input
              onKeyPress={(event) => {
                if (!/[0-9,+]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="+79999999999"
            />
            {this.state.error && (
              <label className="warning">{this.state.error}</label>
            )}
            <button type="submit">ДОБАВИТЬ</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
