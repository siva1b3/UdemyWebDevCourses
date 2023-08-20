import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2022");

  function onYearChange(yearSelected) {
    console.log(`seleted year ${yearSelected}`);
    setYearSelected(yearSelected);
  }

  let arrayReverse = props.yearsList.reverse();
  let filterText = props.yearsList.join(", ");
  let filterTextStyle = {
    color: "white",
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={onYearChange} yearsList={props.yearsList} />
      <div style={filterTextStyle}>
        Data From {props.yearsList} hi {arrayReverse}
        hi {arrayReverse.join(", ")} hi {props.yearsList.join(", ")}is Hidden{" "}
      </div>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
