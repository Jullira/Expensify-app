import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} totalExpense={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with many expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} totalExpense={235312121}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 expense', () => {
    
});