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

for (let i = 1; i <= 1000; i++) {
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

export default DUMMY_EXPENSES;
