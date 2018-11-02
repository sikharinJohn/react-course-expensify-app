import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses value', ()=>{
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () =>{
    const updates = {
        description: 'Living Rent',
        note: 'Monthly',
        amount: 190000,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description);
    expect(state[1].note).toBe(updates.note);
    expect(state[1].amount).toBe(updates.amount);
});

test('should not edit expense if expense not found', () =>{
    const updates = {
        description: 'Living Rent',
        note: 'Monthly',
        amount: 190000,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-10',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () =>{
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});