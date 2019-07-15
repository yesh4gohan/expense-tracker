import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {handlePath} from '../../redux-tools/actions';
 
export class Sidebar extends Component {
  static propTypes = {
    prop: PropTypes
  }
  handleRoute = (myPath) => {
    this.props.handlePath(myPath);
  }
  componentDidMount(){
    this.props.handlePath("home");
  }
  render() {
    console.log(this.props.routePath)
    return (
      <div>

        <ul className="list-group">
          <li className={this.props.routePath ==="home"?"list-group-item active":"list-group-item"} onClick = {()=>{this.handleRoute("home")}}>Home</li>
          <li className={this.props.routePath ==="settings"?"list-group-item active":"list-group-item"} onClick = {()=>{this.handleRoute("settings")}}>Settings</li>
          <li className="list-group-item">Profile</li>
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  routePath:state.routePath.routePath
})

const mapDispatchToProps = {
  handlePath
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
