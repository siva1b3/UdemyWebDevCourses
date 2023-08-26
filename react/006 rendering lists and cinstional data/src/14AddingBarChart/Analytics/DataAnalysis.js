import DUMMY_EXPENSES from "./DataCreate";

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
    const month = (data.date.getMonth() + 1).toString().padStart(2, "0");

    if (!aggregatedData[month]) {
      aggregatedData[month] = {
        month: (data.date.getMonth() + 1).toString().padStart(2, "0"),
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
    data[key].expenseLength = expenses.length;

    delete data[key].expenses;
  }

  return data;
}

export const YearAndMonthdata =
  aggregateExpensesForEachYearAndMonth(DUMMY_EXPENSES);

console.log(YearAndMonthdata);

export const OnlyYearData = aggregateExpensesForonlyYear(DUMMY_EXPENSES);

console.log(OnlyYearData);

export const OnlyMonthData = aggregateExpensesForonlyMonth(DUMMY_EXPENSES);

console.log(OnlyMonthData);
