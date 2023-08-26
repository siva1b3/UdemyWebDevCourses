import React from "react";

const AmountInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>Amount</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default AmountInput;
