import React from "react";

const DateInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        min="2019-01-01"
        max="2022-12-31"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default DateInput;
