import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to="/">Todo List</Link>
        </h4>
        <h4>
          <Link to="/demo">demo</Link>
        </h4>
        <div>{this.props.children}</div>
      </>
    );
  }
}
