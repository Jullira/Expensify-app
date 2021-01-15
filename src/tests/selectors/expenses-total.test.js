import moment from 'moment';
import getTotalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const result = getTotalExpense([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = getTotalExpense([expenses[1]]);
    expect(result).toBe(109500);
});

test('should correctly add upp multiple expense', () => {
    const result = getTotalExpense(expenses);
    expect(result).toBe(114195);
});

