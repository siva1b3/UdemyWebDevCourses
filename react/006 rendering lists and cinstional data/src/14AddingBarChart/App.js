import React, { useState } from "react";
import MultipleTubes from "./components/Chart/MultipleTubes";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [];
const possibleTitles = [
  "Groceries",
  "Entertainment",
  "Shopping",
  "Dining Out",
  "Travel",
  "Utilities",
  "Healthcare",
  "Education",
  "Home Repairs",
  "Subscriptions",
];

for (let i = 1; i <= 100; i++) {
  const id = `e${i}`;
  const randomIndex = Math.floor(Math.random() * possibleTitles.length);
  const amount = Math.floor(Math.random() * 5000) + 1;
  const year = Math.floor(Math.random() * 4) + 2019;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  const date = new Date(year, month, day);
  const title = `${possibleTitles[randomIndex]} ${year} ${month} ${day}`;

  DUMMY_EXPENSES.push({ id, title, amount, date });
}

// Assuming you already have the randomDataArray created from the previous example

// Helper function to get the year and month as a string from a Date object
function getYearMonthString(date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}

// Function to aggregate max, min, sum, and average expenses
function aggregateExpensesForEachYearAndMonth(dataArray) {
  const aggregatedData = {};

  dataArray.forEach((data, index) => {
    const yearMonth = getYearMonthString(data.date);

    if (!aggregatedData[yearMonth]) {
      aggregatedData[yearMonth] = {
        year: data.date.getFullYear(),
        month: data.date.getMonth() + 1,
        expenses: [],
      };
    }

    aggregatedData[yearMonth].expenses.push(data.amount);
  });
  return dataStatistics(aggregatedData);
}

function aggregateExpensesForonlyYear(dataArray) {
  const aggregatedData = {};

  dataArray.forEach((data, index) => {
    const year = data.date.getFullYear().toString();

    if (!aggregatedData[year]) {
      aggregatedData[year] = {
        year: data.date.getFullYear(),
        expenses: [],
      };
    }

    aggregatedData[year].expenses.push(data.amount);
  });
  return dataStatistics(aggregatedData);
}

function aggregateExpensesForonlyMonth(dataArray) {
  const aggregatedData = {};

  dataArray.forEach((data, index) => {
    const month = data.date.getMonth().toString().padStart(2, "0");

    if (!aggregatedData[month]) {
      aggregatedData[month] = {
        month: data.date.getMonth().toString().padStart(2, "0"),
        expenses: [],
      };
    }

    aggregatedData[month].expenses.push(data.amount);
  });
  return dataStatistics(aggregatedData);
}

function dataStatistics(data) {
  for (const key in data) {
    const expenses = data[key].expenses;
    const maxExpense = Math.max(...expenses);
    const minExpense = Math.min(...expenses);
    const sumExpense = expenses.reduce((total, amount) => total + amount, 0);
    const avgExpense = sumExpense / expenses.length;

    data[key].maxExpense = maxExpense;
    data[key].minExpense = minExpense;
    data[key].sumExpense = sumExpense;
    data[key].avgExpense = avgExpense;

    delete data[key].expenses;
  }

  return data;
}

const aggregatedExpenses1 =
  aggregateExpensesForEachYearAndMonth(DUMMY_EXPENSES);

console.log(aggregatedExpenses1);

const aggregatedExpenses2 = aggregateExpensesForonlyYear(DUMMY_EXPENSES);

console.log(aggregatedExpenses2);

const aggregatedExpenses3 = aggregateExpensesForonlyMonth(DUMMY_EXPENSES);

console.log(aggregatedExpenses3);

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
