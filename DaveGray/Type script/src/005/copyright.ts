// Original JavaScript code
/*
 * const year = document.getElementById("year")!;
 * const thisYear = new Date().getFullYear();
 * year.setAttribute("datetime", thisYear);
 * year.textContent = thisYear;
 */

// 1st variation
// Retrieving the element with the ID "year" from the document and asserting its existence
const year = document.getElementById("year")!;
// Getting the current year and converting it to a string
const thisYear: string = new Date().getFullYear().toString();
// Checking if the 'year' element exists
if (year) {
  // Setting the 'datetime' attribute of the 'year' element to the current year
  year.setAttribute("datetime", thisYear);
  // Setting the text content of the 'year' element to the current year
  year.textContent = thisYear;
}

// 2nd variation
// Retrieving the element with the ID "year" from the document and asserting its type as HTMLSpanElement
const year01 = document.getElementById("year") as HTMLSpanElement;
// Getting the current year and converting it to a string
const thisYear01: string = new Date().getFullYear().toString() as string;
// Checking if the 'year' element exists (note: should be 'year01' instead of 'year')
if (year) {
  // Setting the 'datetime' attribute of the 'year' element to the current year
  year01.setAttribute("datetime", thisYear01);
  // Setting the text content of the 'year' element to the current year
  year01.textContent = thisYear01;
}
