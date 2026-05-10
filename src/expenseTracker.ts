
interface ExpenseReport{
    travelDays: number;
    expenseDays: number;
    dailyBudget: number;
    averageDailyExpense: number;
    underBudget: boolean;
    rating: 1 | 2 | 3;
    feedback: string;
}

export function generateExpenseReport(dailyExpenses: number[], dailyBudget: number): ExpenseReport{
    if (dailyExpenses.some(isNaN)){
        throw new Error ("Les despeses contenen valors no numèrics")
    }
    if (dailyBudget < 0 || dailyExpenses.some(e => e < 0)) {
    throw new Error("Les despeses o el pressupost diari no poden ser negatius.");
    }

    if (dailyExpenses.length <= 0) {
    throw new Error("Els dies de viatge no poden ser inferiors o iguals a zero.");
    }

    const travelDays = dailyExpenses.length;
    const expenseDays = dailyExpenses.filter(amount => amount > 0).length
    const totalSpent = dailyExpenses.reduce((acc, current) => acc + current, 0);
    const averageDailyExpense = totalSpent / travelDays;
    let rating: 1 | 2 | 3
    let feedback: string

    if (averageDailyExpense <= dailyBudget){
        rating = 3
        feedback = "Excel·lent gestió!"
    }

        else if (averageDailyExpense <= dailyBudget * 1.2){
            rating = 2
            feedback = "Correcte, però ajustat"
        }

        else {
            rating = 1
            feedback = "Pot millorar"
        }
        return {
        travelDays,
        expenseDays,
        dailyBudget,
        averageDailyExpense,
        underBudget: averageDailyExpense <= dailyBudget,
        rating,
        feedback
        
    }
    }

    const tests = [
    () => console.log(generateExpenseReport([50, 0, 120, 85], 100)),
    () => console.log(generateExpenseReport([-60, 0, 120, 85], 100)),
    () => console.log(generateExpenseReport([50, 0, 120, 85], -100)),
    () => console.log(generateExpenseReport([], 100))
];

tests.forEach((test, index) => {
    try {
        console.log(`--- Test ${index + 1} ---`);
        test();
    } catch (e: any) {
        console.log("❌ Error:", e.message);
    }
});

