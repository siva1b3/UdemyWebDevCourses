import React, { useState } from "react";
import TitleInput from "./FormStates/inputsForExpenseForm/TitleInput";
import AmountInput from "./FormStates/inputsForExpenseForm/AmountInput";
import DateInput from "./FormStates/inputsForExpenseForm/DateInput";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formComponentState, setFormComponentState] = useState("close");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    closeForm();
  };

  const resetForm = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const openForm = () => {
    formStateHandler("open");
  };

  const closeForm = () => {
    resetForm();
    formStateHandler("close");
  };

  const expandedForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <TitleInput value={enteredTitle} onChange={titleChangeHandler} />
        <AmountInput value={enteredAmount} onChange={amountChangeHandler} />
        <DateInput value={enteredDate} onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions" style={{ textAlign: "right" }}>
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  const AddNewExpenseButton = (
    <div className="new-expense__actions" style={{ textAlign: "center" }}>
      <button type="submit" onClick={openForm}>
        Add New Expense
      </button>
    </div>
  );

  function formStateHandler(state) {
    setFormComponentState(state);
  }

  const finalForm =
    formComponentState === "close" ? AddNewExpenseButton : expandedForm;

  return <>{finalForm}</>;
};

export default ExpenseForm;
