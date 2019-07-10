import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ExpenseInfoBar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
      <div
        className="row m-3 bg-warning"
        style={{ height: "40px", borderRadius: 5 }}
      >
        <div className="col-sm-3">Cat name</div>
        <div className="col-sm-3">Item name</div>
        <div className="col-sm-3">Amount</div>
        <div className="col-sm-3">Date</div>
      </div>
      <div
        className="row m-3 bg-warning"
        style={{ height: "40px", borderRadius: 5 }}
      >
        <div className="col-sm-3">Cat name</div>
        <div className="col-sm-3">Item name</div>
        <div className="col-sm-3">Amount</div>
        <div className="col-sm-3">Date</div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseInfoBar);
