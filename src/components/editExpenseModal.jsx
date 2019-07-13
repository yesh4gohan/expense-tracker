import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { categories } from "../mockFiles/mockCategories";
import {editExpense} from '../redux-tools/actions';
export class EditExpenseModal extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    Category: "",
    expName: "",
    Amount: "",
    expenseId:""
  };
  componentDidMount() {
    let { Category, expName, Amount,expenseId } = this.props.expense;
    this.setState({ Category, expName, Amount,expenseId });
  }
  onChange = e => {
    this.setState({[e.target.id]:e.target.value})
  }

  validate = () => {
    return this.state.Category.length && this.state.expName && this.state.Amount > 0
  }
   edit = async () => {
    await this.props.editExpense(this.state);
    this.props.toggleEdit("");
  };
  cancel = () => {
    this.props.toggleEdit("");
  }
  render() {
    return (
      <div className="bg-secondary" style={{ borderRadius: 5 }}>
        <div className="row m-1">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="Category"
              defaultValue={this.state.Category}
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
              placeholder="Item name"
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
        <div className="row m-1 justify-content-center">
          <div class="col-sm-4">
            <button className="btn btn-primary btn-sm" onClick={this.edit} disabled = {!this.validate()}>
              update
            </button>
          </div>
          <div class="col-sm-4">
            <button className="btn btn-danger btn-sm" onClick={this.cancel}>
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  editExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpenseModal);
