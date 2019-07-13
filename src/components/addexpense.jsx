import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { categories } from "../mockFiles/mockCategories";
import {addNewExpenseAction,getAllExpenses} from '../redux-tools/actions';
export class Addexpense extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    Category: "Misc",
    Amount: 0,
    expName: ""
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addNewExpense = async e => {
    await this.props.addNewExpenseAction(this.state);
    this.setState({Category:"Misc",Amount:0,expName:""})

  }
  renderExpenseForm = () => (
    <div>
      <div className="row m-1">
        <div className="input-group mb-3">
          <select
            className="custom-select"
            id="Category"
            defaultValue="Misc"
            onChange={this.onChange}
          >
            <option selected>Misc</option>
            {categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row m-1">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Item expName"
            id="expName"
            value={this.state.expName}
            onChange={this.onChange}
          />
        </div>
      </div>
      <div className="row m-1">
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            id="Amount"
            placeholder="Amount Spent in Rs."
            value={this.state.Amount}
            onChange={this.onChange}
          />
        </div>
      </div>
    </div>
  );
  
  validateInputs = () => {
    return this.state.Category.length && this.state.expName.length && this.state.Amount>0
  }

  renderModal = () => (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={this.toggleModal}
      >
        Add new expense
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.renderExpenseForm()}</div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={
                  this.addNewExpense
                }
                disabled = {!this.validateInputs()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  render() {
    
    return this.renderModal();
  }
}

const mapStateToProps = state => ({
expenses:state.expenses.expenses
});

const mapDispatchToProps = {
  addNewExpenseAction,
  getAllExpenses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Addexpense);


