// SpendWise JavaScript Foundation

// ========================================
// 1. Store Application Data
// ========================================

let budget = 0;
let expense = 0;
let remainingBalance = 0;


// ========================================
// 2. Collect User Input
// ========================================

budget = Number(prompt("Enter your total budget:"));

expense = Number(prompt("Enter your total expenses:"));


// ========================================
// 3. Budget Calculation Function
// ========================================

function calculateRemainingBalance(budgetAmount, expenseAmount) {
	return budgetAmount - expenseAmount;
}


// ========================================
// 4. Calculate Remaining Balance
// ========================================

remainingBalance = calculateRemainingBalance(budget, expense);


// ========================================
// 5. Display Results in Console
// ========================================

console.log("========== SpendWise Budget Report ==========");

console.log("Total Budget: KES " + budget);

console.log("Total Expenses: KES " + expense);

console.log("Remaining Balance: KES " + remainingBalance);

console.log("=============================================");
