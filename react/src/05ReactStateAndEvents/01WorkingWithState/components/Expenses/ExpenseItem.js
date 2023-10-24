import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card1 from "../UI/Card1";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // ! UseState Or Other Hooks always need to be top of the function
  // * we are not allowed to add the in any other place
  const [isDisabled, setIsDisabled] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [myComponentStyle, setMyComponentStyle] = useState({
    color: "blue",
    lineHeight: 1,
    padding: "1em",
  });

  // Function clickHandler
  function clickHandler() {
    console.log("hi");
    if (title.indexOf("Updated") === -1) {
      setTitle(`${title} Updated!`);
      setMyComponentStyle({
        ...myComponentStyle,
        color: "red",
        "font-size": "x-large",
      });
      setIsDisabled(true);
    } else {
    }
    console.log(title);
  }

  return (
    <Card1 className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 style={myComponentStyle}>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} disabled={isDisabled}>
        Change Title
      </button>
    </Card1>
  );
};

export default ExpenseItem;
