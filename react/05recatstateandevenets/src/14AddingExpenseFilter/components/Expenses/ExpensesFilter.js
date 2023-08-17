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

  const yearValues = ["2022", "2021", "2020", "2019", "2018"];
  const yearValueOptionsJsx = [];
  for (let yearValue of yearValues) {
    const k = <option value={yearValue}>{yearValue}</option>;
    yearValueOptionsJsx.push(k);
  }

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
          {/* {yearValues.map((yearValue) => (
            <option value={yearValue}>{yearValue}</option>
          ))} */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
