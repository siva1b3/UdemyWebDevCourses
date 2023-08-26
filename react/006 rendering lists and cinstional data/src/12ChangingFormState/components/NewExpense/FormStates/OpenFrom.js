import React from "react";
import TitleInput from "./inputsForExpenseForm/TitleInput";
import AmountInput from "./inputsForExpenseForm/AmountInput";
import DateInput from "./inputsForExpenseForm/DateInput";

export default function OpenForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="new-expense__controls">
        <TitleInput
          value={props.enteredTitle}
          onChange={props.titleChangeHandler}
        />
        <AmountInput
          value={props.enteredAmount}
          onChange={props.amountChangeHandler}
        />
        <DateInput
          value={props.enteredDate}
          onChange={props.dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions" style={{ textAlign: "right" }}>
        <button type="button" onClick={props.closeForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
