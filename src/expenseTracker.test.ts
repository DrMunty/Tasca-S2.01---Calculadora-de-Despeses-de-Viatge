import { describe, it, expect } from 'vitest';
import {generateExpenseReport} from './expenseTracker';

describe('generateExpenseReport()', () => {
  it('hauria de retornar un informe complet correcte', () => {
    const dailyExpenses = [50,0,120,85];
    const dailyBudget = 100

    const result = generateExpenseReport(dailyExpenses, dailyBudget);

    expect(result.travelDays).toBe(4);
    expect(result.expenseDays).toBe(3);
    expect(result.dailyBudget).toBe(100);
    expect(result.averageDailyExpense).toBe(63.75);
    expect(result.underBudget).toBe(true);
    expect(result.rating).toBe(3);
    expect(result.feedback).toBe("Excel·lent gestió!");

  });
  
  it('hauria de llançar un error amb el missatge "Les despeses contenen valors no numèrics"', () => {
    const dailyExpenses = [50,NaN,120,85];
    const dailyBudget = 100


    expect (() => generateExpenseReport(dailyExpenses,dailyBudget)).toThrow("Les despeses contenen valors no numèrics");

  });

  it('hauria de retornar un rating de 2', () => {
    const dailyExpenses = [100,110,120,110];
    const dailyBudget = 100

    const result = generateExpenseReport(dailyExpenses, dailyBudget);

    expect(result.rating).toBe(2);
    expect(result.feedback).toBe("Correcte, però ajustat");

  });

   it('hauria de retornar un rating de 1', () => {
    const dailyExpenses = [150,140,130,140];
    const dailyBudget = 100

    const result = generateExpenseReport(dailyExpenses, dailyBudget);

    expect(result.rating).toBe(1);
    expect(result.feedback).toBe("Pot millorar");

  });

});


    