import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

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
        {dataINSpecifiedYear.length === 0 ? (
          <div style={{ color: "white", "font-size": "x-large" }}>
            there is no data in the specided year {filteredYear}
          </div>
        ) : (
          dataINSpecifiedYear.map((item) => {
            return (
              <ExpenseItem
                // ! by adding unique id we can avoid dulicates
                // ^ if data was rendring dynamically
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
};

export default Expenses;
