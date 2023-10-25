import React from "react";
import "./index.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  let expenseDataFromChild = undefined;

  // ! create a Function in parent componet that will recive data from child
  function ReciveDataFromChild(DataFromChild) {
    expenseDataFromChild = {
      ...DataFromChild,
    };
    console.log("in App.js");
    console.table(expenseDataFromChild);
  }

  return (
    <div>
      <NewExpense SendDataToParent={ReciveDataFromChild} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
