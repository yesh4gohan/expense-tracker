import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {launchEditModal} from '../redux-tools/actions';
import AddExpense from './addexpense';
export class ExpenseInfoBar extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    expense:{}
  }
  edit = expense => {
    this.setState({expense},()=>{
      this.props.launchEditModal(true);
    })  
  }
  renderExpenseList = (expenses) => (
    
    <div>
        {expenses &&
          expenses.map((expense, id) => (
            <div
              className="row m-3 bg-warning"
              style={{ height: "40px", borderRadius: 5 }}
              key={id}
            >
              <div className="col-sm-3">
                <span style={{ float: "left" }}>
                  {/* <button className="btn btn-primary btn-sm" onClick = {()=>{this.edit(expense)}}>edit</button> */}
                  <AddExpense edit = {true} expense = {expense}/>
                </span>
                {expense.Category}
              </div>
              <div className="col-sm-3">{expense.name}</div>
              <div className="col-sm-3">{expense.Amount}</div>
              <div className="col-sm-3">
                {expense.date}
                <span style={{ float: "right" }}>
                  <button className="btn btn-danger btn-sm">delete</button>
                </span>
              </div>
            </div>
          ))}
      </div>
  )
  render() {
    let { expenses } = this.props;
    return this.renderExpenseList(expenses)
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
  editModal:state.editModal.editModal
});

const mapDispatchToProps = {
  launchEditModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseInfoBar);
