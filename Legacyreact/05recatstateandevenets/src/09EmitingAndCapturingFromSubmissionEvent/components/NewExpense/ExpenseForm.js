import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangehandler(event) {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }

  function amountChangehandler(event) {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  }

  function dateChangehandler(event) {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  function inputHandler(identifier, value) {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    }
  }
  let expenseData = undefined;

  function submitHandler(event) {
    event.preventDefault();
    expenseData = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount,
    };
    console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
