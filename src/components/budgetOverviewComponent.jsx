import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "react-google-charts";
import { totalExpense } from "../redux-tools/actions";
const pieOptions = {
  title: "",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
export class BudgetOverView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    this.props.totalExpense(this.props.expenses);
  }
  render() {
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Budget Overview</h5>
            <Chart
              chartType="PieChart"
              data={[
                ["Budget", "Spent"],
                ["Budget", parseInt(this.props.budget)],
                ["Spent", parseInt(this.props.spent)]
              ]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"300px"}
              legend_toggle
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
  spent: state.spent.spent,
  budget: state.budget.budget
});

const mapDispatchToProps = {
  totalExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetOverView);
