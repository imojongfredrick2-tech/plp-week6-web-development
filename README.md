# SpendWise

SpendWise is a simple budget management web application designed to help users keep track of their budget and expenses.

The project was originally created as a visual dashboard using HTML and CSS. JavaScript has now been added to make the application process budgeting information, perform calculations, and display results.

## Project Files

```
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

The current JavaScript version of SpendWise can:

- Store budget information.
- Store expense information.
- Collect information from the user using JavaScript prompts.
- Calculate the remaining balance.
- Use reusable functions for budget calculations.
- Display budget results in the browser console.

## JavaScript Concepts Implemented

This project demonstrates the following JavaScript concepts:

- Variables
- Data types
- User input
- Number conversion
- Calculations
- Functions
- Function parameters and return values
- Console output

## Variables

Variables are used to store important budgeting information.

For example:

```js
let budget = 0;
let expense = 0;
let remainingBalance = 0;
```

The `budget` variable stores the user's total budget.

The `expense` variable stores the total amount spent.

The `remainingBalance` variable stores the amount remaining after expenses have been deducted from the budget.

An array can also be used to store expense-related data:

```js
let expenses = [];
```

## Data Types

The project uses different JavaScript data types.

Numbers are used for financial calculations:

```js
let budget = 50000;
let expense = 17500;
```

Strings are used for messages displayed in prompts and the console:

```js
console.log("Total Budget: KES " + budget);
```

Arrays can be used to store multiple expense records:

```js
let expenses = [];
```

## User Input

SpendWise collects budgeting information using JavaScript's `prompt()` function.

For example:

```js
budget = Number(prompt("Enter your total budget:"));
expense = Number(prompt("Enter your total expenses:"));
```

The user enters their budget and expense information through browser prompts.

The `Number()` function converts the information entered by the user into numbers so that JavaScript can perform mathematical calculations.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting the total expenses from the total budget.

The calculation is:

```
Remaining Balance = Budget - Expenses
```

For example, if the budget is KES 50,000 and expenses are KES 17,500:

```
Remaining Balance = 50,000 - 17,500
Remaining Balance = 32,500
```

## Functions

Functions are used to organize the application's logic and make calculations reusable.

The project includes a function called `calculateRemainingBalance()`:

```js
function calculateRemainingBalance(budgetAmount, expenseAmount) {
	return budgetAmount - expenseAmount;
}
```

The function receives the budget and expense amounts as parameters and returns the calculated remaining balance.

It can then be called using:

```js
remainingBalance = calculateRemainingBalance(budget, expense);
```

Using functions makes the code easier to understand, maintain, and reuse.

## Displaying Results

The calculated results are displayed in the browser console using `console.log()`.

Example:

```js
console.log("========== SpendWise Budget Report ==========");
console.log("Total Budget: KES " + budget);
console.log("Total Expenses: KES " + expense);
console.log("Remaining Balance: KES " + remainingBalance);
```

The console output is clearly labeled so that the user can easily understand the budget information.

## How to Run the Project

1. Download or clone the SpendWise repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter the requested budget when the first prompt appears.
5. Enter the total expenses when the second prompt appears.
6. Open the browser Developer Tools using `F12`.
7. Select the **Console** tab.
8. View the SpendWise budget report.

## Example

If the user enters:

```
Budget: 50000
Expenses: 17500
```

The browser console displays:

```
========== SpendWise Budget Report ==========
Total Budget: KES 50000
Total Expenses: KES 17500
Remaining Balance: KES 32500
=============================================
```

## Testing

The application should be tested using different budget and expense values.

| Budget | Expenses | Remaining Balance |
| --- | --- | --- |
| KES 50,000 | KES 17,500 | KES 32,500 |
| KES 30,000 | KES 10,000 | KES 20,000 |
| KES 20,000 | KES 8,500 | KES 11,500 |

The calculations should change according to the values entered by the user.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Author

SpendWise was developed as part of the Week 6 JavaScript assignment.
