import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item active" >Home</li>
          <li className="list-group-item">Settings</li>
          <li className="list-group-item">Profile</li>
        </ul>
      </div>
    );
  }
}
