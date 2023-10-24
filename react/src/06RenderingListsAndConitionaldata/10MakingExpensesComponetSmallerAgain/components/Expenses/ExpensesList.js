import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  let elementsInSpecifedYear = (
    <div style={{ color: "white", "font-size": "x-large" }}>
      there is no data in the specided year {props.filteredYear}
    </div>
  );

  if (props.dataINSpecifiedYear.length > 0) {
    elementsInSpecifedYear = props.dataINSpecifiedYear.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return <>{elementsInSpecifedYear}</>;
}
