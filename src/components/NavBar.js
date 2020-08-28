import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
export default class Nav extends Component {
  state = {
    activeItem:
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.substr(1),
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid inverted>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/addBooking"
          name="addBooking"
          active={activeItem === "addBooking"}
          onClick={this.handleItemClick}
        >
          <Icon name="add" />
          Add Booking
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="seatingPage"
          name="seatingPage"
          active={activeItem === "seatingPage"}
          onClick={this.handleItemClick}
        >
          <Icon name="clipboard list" />
          Seating Page
        </Menu.Item>
      </Menu>
    );
  }
}
