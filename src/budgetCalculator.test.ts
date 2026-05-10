import {it, describe, expect} from 'vitest'
import {calculateBudgetStatus} from './budgetCalculator'

describe('calculateBudgetStatus()', () => {
  it('hauria de retornar "Sota pressupost ✈️" quan les despeses són menys del 80%', () => {
    const budget = 1000;
    const expenses = 700;

    const result = calculateBudgetStatus(expenses, budget);

    expect(result).toBe("Sota pressupost ✈️");
  });
  
  it('hauria de retornar "Dins pressupost ✅" quan les despeses són entre el 80% i el 100% del pressupost', () => {
    const budget = 1000;
    const expenses = 850;

    const result = calculateBudgetStatus(expenses, budget);

    expect(result).toBe("Dins pressupost ✅");
  });
  
  it('hauria de retornar "Sobre pressupost ⚠️" quan les despeses superen el pressupost', () => {
    const budget = 1000;
    const expenses = 1200;

    const result = calculateBudgetStatus(expenses, budget);

    expect(result).toBe("Sobre pressupost ⚠️");
  });
  
  it ('hauria de retornar un error amb el missatge "Les despeses no poden ser negatives"', () => {
        const budget = 1000;
        const expenses = -850;

        expect(() => calculateBudgetStatus(expenses, budget)).toThrow("Les despeses no poden ser negatives");
    });
});