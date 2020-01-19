import React, { Component } from "react";

const profileStyles = {
  border: "black 1px solid",
  width: "60%",
  // margin: "auto",
  padding: "1%",
  background: "rgb(48, 80, 80)"
};

export class Profile extends Component {
  formDisplay = () => {
    return this.props.formBtn ? "Block" : "none";
  };
  render() {
    const formStyle = {
      border: "black 1px solid",
      width: "50%",
      margin: "auto",
      padding: "1%",
      background: "GhostWhite",
      display: this.formDisplay()
    };
    return (
      <div>
        <button
          onClick = {this.props.formBtnClick}
          style={profileStyles}
        >
          <h2>Profile ▼</h2>
        </button>
        <div className="form" style={formStyle}>
          <div className="name">
            <h4>First</h4>
            <h4>Last</h4>
          </div>
          <h4>Email</h4>
          <h4>Age</h4>
        </div>
      </div>
    );
  }
}

export default Profile;
