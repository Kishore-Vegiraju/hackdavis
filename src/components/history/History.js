import React, { Component } from "react";
import { HistoryItem } from "./HistoryItem.js";

const historyBtn = {
    border: "black 1px solid",
    width: "60%",
    margin: "auto",
    padding: "1%",
    background: "rgb(48, 80, 80)"
  };

export class History extends Component {

    historyDisplay = () => {
        return this.props.hisBtn ? "Block" : "none";
      };

  hisTag = () => {
    return this.props.History.map(historyItem => (
      <HistoryItem
        key={historyItem.id}
        historyItem={historyItem}
      />
    ));
  };

  render() {
    const hisStyle = {
        display: this.historyDisplay()
      };


    return (
      <div>
        <button style = {historyBtn} onClick = {this.props.hisBtnClick}><h2>History ▼</h2></button>
        <h4 style = {hisStyle}>{this.hisTag()}</h4>
      </div>
    );
  }
}

export default History;
