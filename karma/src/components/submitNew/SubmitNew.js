import React, { Component } from "react";

export class SubmitNew extends Component {
  formDisplay = () => {
    return this.props.submitBtn ? "Block" : "none";
  };
  render() {
    const submitStyle = {
      display: this.formDisplay()
    };
    const formStyle = {
        border: "black 1px solid",
        width: "60%",
        margin: "auto",
        padding: "1%",
        background: "rgb(48, 80, 80)"
    };
    const {
      business,
      place,
      date,
      time,
      onBusinessChange,
      onPlaceChange,
      onToChange,
      onFromChange,
      onDateChange
    } = this.props;
    return (
      <div className="container">
        <button onClick={this.props.submitBtnClick} style={formStyle}>
          <h2>Submit New ▼</h2>
        </button>
        <form style={submitStyle} onSubmit={this.props.onSubmitForm}>
          <input
            type="text"
            style={{ flex: "5", padding: "1%", fontSize: "100%" }}
            value={business}
            placeholder="Business"
            name="Business"
            onChange={onBusinessChange}
          />
          <input
            type="text"
            style={{ flex: "5", padding: "1%", fontSize: "100%" }}
            value={place}
            placeholder="Place"
            name="Place"
            onChange={onPlaceChange}
          />
          <input
            type="time"
            style={{ flex: "5", padding: "1%", fontSize: "100%" }}
            value={time}
            placeholder="Start Time"
            name="StartTime"
            onChange={onFromChange}
          />
          <input
            type="time"
            style={{ flex: "5", padding: "1%", fontSize: "100%" }}
            value={time}
            placeholder="End Time"
            name="EndTime"
            onChange={onToChange}
          />
          <input
            type="date"
            style={{ flex: "5", padding: "1%", fontSize: "100%" }}
            value={date}
            placeholder="Date"
            name="Date"
            onChange={onDateChange}
          />
          <input
            type="submit"
            value="Submit"
            style={{
              background: "coral",
              fontWeight: "bolder",
              fontSize: "100%",
              padding: "1%"
            }}
          />
        </form>
      </div>
    );
  }
}

export default SubmitNew;
