import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return React.createElement(
    Card,
    { className: "expense-item" },
    React.createElement(ExpenseDate, { date: props.date }),
    React.createElement(
      "div",
      { className: "expense-item__description" },
      React.createElement("h2", null, props.title),
      React.createElement(
        "div",
        { className: "expense-item__price" },
        "$",
        props.amount
      )
    )
  );
};

export default ExpenseItem;
