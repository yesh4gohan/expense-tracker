import React, { Component } from "react";
import ExpenseInfoBar from "../expenseinfobar";
import Addexpense from "../addexpense";
import { addNewExpenseAction, getAllExpenses } from "../../redux-tools/actions";
import { connect } from "react-redux";
import Settings from "./settings";
import BudgetOverView from '../budgetOverviewComponent';



class Mainbar extends Component {
  async componentDidMount() {
    await this.props.getAllExpenses();
  }
  renderHomeLayout = () => (
    <div>
      <div className="row m-3">
        <BudgetOverView/>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Category wise split</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <Addexpense />
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
      <ExpenseInfoBar />
    </div>
  );
  render() {
    return this.props.routePath === "home" ? (
      this.renderHomeLayout()
    ) : (
      <Settings />
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
  routePath: state.routePath.routePath
});

const mapDispatchToProps = {
  addNewExpenseAction,
  getAllExpenses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mainbar);
