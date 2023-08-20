import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState(""); // State to hold the selected year

  // ! When the page is initially loaded,
  // ^ the selectedYear state is an empty string "" ,
  // * which doesn't match any of the <option> values.
  // ? This doesn't cause an error,
  // ! but it results in the first option being selected by default.
  // ^ In our case, the first option is "2022".
  // * This is because, when no option matches the value attribute,
  // ? the first option is selected as a default.

  const yearValues = props.yearsList;

  const yearValueOptionsJsx = yearValues.map((yearValue, index) => (
    <option key={index} value={yearValue}>
      {yearValue}
    </option>
  ));

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedYear(selectedValue);
    console.log(`Selected year: ${selectedValue}`);
    props.onYearChange(selectedValue);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange} value={selectedYear}>
          {yearValueOptionsJsx}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
