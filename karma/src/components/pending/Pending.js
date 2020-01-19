import React, { Component } from "react";
import { PendingItem } from "./PendingItem.js";

const pendingBtn = {
  border: "black 1px solid",
  width: "60%",
  margin: "auto",
  padding: "1%",
  background: "rgb(48, 80, 80)"
};

export class Pending extends Component {
  pendingDisplay = () => {
    return this.props.pendBtn ? "Block" : "none";
  };

  pendTag = () => {
    return this.props.Pending.map(pendingItem => (
      <PendingItem key={pendingItem.id} pendingItem={pendingItem} />
    ));
  };

  render() {
    const pendStyle = {
      display: this.pendingDisplay()
    };

    return (
      <div>
        <button style={pendingBtn} onClick={this.props.pendBtnClick}>
          <h2>Pending ▼</h2>
        </button>
        <h4 style={pendStyle}>{this.pendTag()}</h4>
      </div>
    );
  }
}

export default Pending;
