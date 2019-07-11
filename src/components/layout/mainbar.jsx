import React, { Component } from "react";
import ExpenseInfoBar from '../expenseinfobar';
import Addexpense from '../addexpense';
export default class Mainbar extends Component {
  render() {
    return (
      <div>
        <div className="row m-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Budget Overview</h5>
                
                
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Category wise split</h5>
                
               
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <Addexpense/>
        </div>
        <div className="row m-3">
          <table class="table">
            <thead className="thead-light">
              <tr>
                <th scope="col-sm-3">Category</th>
                <th scope="col-sm-3">Item name</th>
                <th scope="col-sm-3">Amount</th>
                <th scope="col-sm-3">Expense Date</th>
              </tr>
            </thead>
          </table>
        </div>
        <ExpenseInfoBar/>
      </div>
    );
  }
}
