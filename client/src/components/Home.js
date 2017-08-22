import React, { Component } from "react";
import { connect } from "react-redux";
//
import * as actions from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.onAddClick = this.onAddClick.bind(this);
    this.onUserClick = this.onUserClick.bind(this);
  }
  onAddClick() {

  }

  onUserClick() {
    this.props.fetchUser();
    console.log("user: ", this.props.user);
  }

  render()
  {
    return (
      <div style={{ display:"flex", justifyContent: "center", alignItems: "center" }}>
         <div style={{ flex: "2" }}>
            {this.props.user.name}
         </div>
        <div style={{ flex: "2" }}>
          <button className="waves-effect waves-light btn" onClick={this.onUserClick}>
            Call API
          </button>
        </div>
        <div style={{ flex: "5" }}>
          <button className="waves-effect waves-light btn" onClick={this.onAddClick}>
            Add
          </button>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { 
    user: state.user
   };
}
export default connect(mapStateToProps, actions)(Home);
