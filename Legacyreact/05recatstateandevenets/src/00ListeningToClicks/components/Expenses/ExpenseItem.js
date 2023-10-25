import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card1 from "../UI/Card1";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Function clickHandler
  function clickHandler() {
    console.log("clicked");
  }

  return (
    <Card1 className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card1>
  );
};

export default ExpenseItem;
