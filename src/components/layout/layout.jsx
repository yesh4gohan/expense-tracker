import React, { Component } from "react";
import Mainbar from "./mainbar";
import Sidebar from "./sidebar";
import {API} from 'aws-amplify';

export default class Layout extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row m-1">
          <div className="col-sm-3 bg-light">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <Mainbar />
          </div>
        </div>
      </div>
    );
  }
}
