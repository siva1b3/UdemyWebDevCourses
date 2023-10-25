import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = (props) => {
  const ExpenseItemAggregate = [];

  for (let k of props.expensesdetails) {
    ExpenseItemAggregate.push(<ExpenseItem details={k} />);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* sending all data in variable */}
      <div className="expenses">{ExpenseItemAggregate}</div>
    </div>
  );
};

export default Expenses;
