import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateBudget} from '../../redux-tools/actions';
export class Settings extends Component {
  static propTypes = {
    prop: PropTypes
  };
  update = () => {
    this.props.updateBudget(this.state.budget)
  }
  componentDidMount(){
    this.setState({budget:this.props.budget})
  }
  state = {
    budget:0,
    category:""
  }
  onChange =e => {
    this.setState({[e.target.id]:e.target.value})
  }
  render() {
    console.log(this.props.budget)
    return (
      <div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Total Budget:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="budget"
              value={this.state.budget}
              onChange={this.onChange}
            />
            
          </div>
          <span style = {{float:"right"}}>
              <button className = "btn btn-primary" onClick = {this.update}>update</button>
              </span>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Add new category:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Catergory..."
              value={this.state.category}
              onChange = {this.onChange}
            />
            
          </div>
          <span style = {{float:"right"}}>
              <button className = "btn btn-primary" >Add</button>
              </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget:state.budget.budget
});

const mapDispatchToProps = {
  updateBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
