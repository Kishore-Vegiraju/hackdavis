import React, { Component } from "react";

export class PendingItem extends Component {

  render() {
    const itemStyle = {
      border: " black 1px solid ",
      background: "GhostWhite",
      width: "60%",
      margin: "auto",
    };

    const { business, place, from, to, date} = this.props.pendingItem;
    return (
    <div className = 'container'>
      <div style={itemStyle}>
        <h3>Business: {business}</h3>
        <h3>Place: {place}</h3>
        <h3>from: {from}</h3>
        <h3>to: {to}</h3>
        <h3>date: {date}</h3>
      </div>
      </div>
    );
  }
}

export default PendingItem;
