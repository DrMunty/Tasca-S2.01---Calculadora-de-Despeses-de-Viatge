type BudgetStatusMessage = "Sota pressupost ✈️" | "Dins pressupost ✅" | "Sobre pressupost ⚠️";

function calculateBudgetStatus(totalExpenses: number, budget: number): BudgetStatusMessage {
const percentatge = (totalExpenses/budget) * 100;
if (percentatge < 80){
    return "Sota pressupost ✈️"
}
else if(percentatge >= 80 && percentatge < 100){
    return "Dins pressupost ✅"
}
else {
    return "Sobre pressupost ⚠️"
}
}

console.log(calculateBudgetStatus(850, 1000))