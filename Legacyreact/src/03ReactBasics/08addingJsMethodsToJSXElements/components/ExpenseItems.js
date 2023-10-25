import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2023, 7, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 234.5;

  // const expenseDate = props.details.date;
  const expenseTitle = props.details.title;
  const expenseAmount = props.details.amount;

  const month = props.details.date.toLocaleString("en-US", { month: "long" });
  const year = props.details.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.details.date.toLocaleString("en-US", { day: "numeric" });
  const weekDay = props.details.date.toLocaleString("en-US", {
    weekday: "long"
  });

  return (
    <div className="expense-item">
      <div>
        <div>{weekDay}</div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
