import React from "react";
import "./index.css";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  return React.createElement(
    "div", // tag for element
    {}, // props/attributes of element
    // children of element
    React.createElement("h2", {}, "Let's get started!"),
    // tag of the need to have double quotes or single quote
    // around them if the "tag" is inbulit tags
    React.createElement(Expenses, { items: expenses })
    // for custom made react tags
    // no need to surround with quotes
  );
};

export default App;
