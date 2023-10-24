import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const dataINSpecifiedYear = props.items.filter((item) => {
    return item.date.getFullYear() === Number(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList
          filteredYear={filteredYear}
          dataINSpecifiedYear={dataINSpecifiedYear}
        />
      </Card>
    </div>
  );
};

export default Expenses;
