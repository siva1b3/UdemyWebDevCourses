import "./ExpenseItem.css";

// object destricturing
const ExpenseItem = ({ details: { title, date, amount } }) => {
  // const expenseDate = new Date(2023, 7, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 234.5;

  const expenseDate = date;
  const expenseTitle = title;
  const expenseAmount = amount;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
