import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return React.createElement(
    Card,
    { className: "expenses" },
    React.createElement(ExpenseItem, {
      title: props.items[0].title,
      amount: props.items[0].amount,
      date: props.items[0].date
    }),
    React.createElement(ExpenseItem, {
      title: props.items[1].title,
      amount: props.items[1].amount,
      date: props.items[1].date
    }),
    React.createElement(ExpenseItem, {
      title: props.items[2].title,
      amount: props.items[2].amount,
      date: props.items[2].date
    }),
    React.createElement(ExpenseItem, {
      title: props.items[3].title,
      amount: props.items[3].amount,
      date: props.items[3].date
    })
  );
};

export default Expenses;
