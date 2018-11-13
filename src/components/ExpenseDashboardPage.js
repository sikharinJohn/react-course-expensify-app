import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import LocaleSwitcher from './LocaleSwitcher';

const ExpenseDashboardPage = () => (
    <div>
        <LocaleSwitcher />
        <ExpensesSummary /> 
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;