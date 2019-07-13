import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditExpenseModal from './editExpenseModal';
export class ExpenseInfoBar extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    expenseId: ""
  };
  setId = (id) => {
    this.setState({expenseId:id})
  }
  
  renderExpenseList = expenses => (
    <div>
      {expenses &&
        expenses.map((expense, id) => {
          if(expense.expenseId !== this.state.expenseId){
            return <div
            className="row m-3 bg-warning"
            style={{ height: "40px", borderRadius: 5 }}
            key={id}
          >
            <div className="col-sm-3">
              <span style={{ float: "left" }}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick = {()=>{this.setId(expense.expenseId)}}
                >
                  edit
                </button>
                {/* <EditExpenseModal expense = {expense} toggle = {this.toggle}/> */}
              </span>
              {expense.Category}
            </div>
            <div className="col-sm-3">{expense.expName}</div>
            <div className="col-sm-3">{expense.Amount}</div>
            <div className="col-sm-3">
              {expense.expdate}
              <span style={{ float: "right" }}>
                <button className="btn btn-danger btn-sm">delete</button>
              </span>
            </div>
          </div>
          }
          else{
            return <EditExpenseModal expense = {expense} toggleEdit = {this.setId}/>
          }   
        }
          
        )}
    </div>
  );
  render() {
    let { expenses } = this.props;
    return this.renderExpenseList(expenses);
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
  editModal: state.editModal.editModal
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseInfoBar);
