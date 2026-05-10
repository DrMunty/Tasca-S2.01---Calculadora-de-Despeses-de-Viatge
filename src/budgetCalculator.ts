

type BudgetStatusMessage = "Sota pressupost ✈️" | "Dins pressupost ✅" | "Sobre pressupost ⚠️";

export function calculateBudgetStatus(totalExpenses: number, budget: number): BudgetStatusMessage {
     if (totalExpenses < 0) {
    throw new Error("Les despeses no poden ser negatives.");
    }
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

