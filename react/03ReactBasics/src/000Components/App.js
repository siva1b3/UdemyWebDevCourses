// import "../src/universal.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import ExpenceItem from "./ExpenceItem";

const expense = [
  { title: "car insurance", amount: 234.5, date: new Date(2023, 7, 28) },
  { title: "car insurance1", amount: 23454.5, date: new Date(2022, 7, 28) },
  { title: "car insurance2", amount: 2434.5, date: new Date(2023, 6, 29) },
  { title: "car insurance3", amount: 23434.5, date: new Date(2021, 7, 28) }
];

function App() {
  // Create an array to store the ExpenseItem components
  const expenseItems = [];

  // Loop through the 'expense' array and create ExpenseItem components for each item
  for (let i = 0; i < expense.length; i++) {
    const item = expense[i];
    expenseItems.push(
      <ExpenceItem
        key={i} // Adding a unique 'key' prop is required when using arrays of elements
        title={item.title}
        date={item.date}
        price={item.amount}
      />
    );
  }
  return (
    <>
      <h2>Let's get started!</h2>
      <p>hello</p>
      <ExpenceItem
        title={expense[0].title}
        date={expense[0].date}
        price={expense[0].amount}
      />
      <ExpenceItem
        title={expense[1].title}
        date={expense[1].date}
        price={expense[1].amount}
      />
      <ExpenceItem
        title={expense[2].title}
        date={expense[2].date}
        price={expense[2].amount}
      />
      {/* <ExpenceItem
        title={expense[2].title}
        date={expense[2].date}
        price={expense[2].amount}
      /> */}
      {/* {expenseItems} */}
    </>
  );
}

export default App;
