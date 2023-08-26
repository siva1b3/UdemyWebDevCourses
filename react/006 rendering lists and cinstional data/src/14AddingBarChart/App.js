import React, { useState } from "react";
import MultipleTubes from "./components/Chart/MultipleTubes";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14), // August 14, 2020
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12), // March 12, 2021
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28), // March 28, 2021
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12), // June 12, 2021
  },
  {
    id: "e5",
    title: "Groceries",
    amount: 120.85,
    date: new Date(2019, 0, 5), // January 5, 2019
  },
  {
    id: "e6",
    title: "Movie Tickets",
    amount: 35.75,
    date: new Date(2019, 7, 20), // August 20, 2019
  },
  {
    id: "e7",
    title: "Restaurant Dinner",
    amount: 68.95,
    date: new Date(2022, 10, 15), // November 15, 2022
  },
  {
    id: "e8",
    title: "Fitness Membership",
    amount: 200,
    date: new Date(2022, 2, 3), // March 3, 2022
  },
  {
    id: "e9",
    title: "Book Purchase",
    amount: 25.5,
    date: new Date(2022, 4, 18), // May 18, 2022
  },
  {
    id: "e10",
    title: "Home Repairs",
    amount: 350,
    date: new Date(2020, 6, 7), // July 7, 2020
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <MultipleTubes />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
