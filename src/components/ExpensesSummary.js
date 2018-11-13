import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { FormattedMessage } from 'react-intl';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal, hiddenCount }) => {
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <FormattedMessage
                    id="summary.text"
                    defaultMessage={`Viewing {expensesCount} {expensesCount, plural, one {expense} other {expenses} } totalling {expensesTotal}`}
                    values={{ expensesCount, expensesTotal: formattedExpensesTotal }}
                >
                    {(txt) => (
                        <h1 className="page-header__title">
                            {txt}
                        </h1>
                    )}
                </FormattedMessage>
                {hiddenCount > 0 ?
                    <FormattedMessage
                        id="summary.text-hidden"
                        defaultMessage={`Hidden {hiddenCount} {hiddenCount, plural, one {expense} other {expenses} } by filters`}
                        values={{ hiddenCount }}
                    >
                        {(txt) => (
                            <h2 className="page-header__title">
                                {txt}
                            </h2>
                        )}
                    </FormattedMessage>
                    : ''}
                <div className="page-header__actions">
                    <Link className="button" to="/create">
                        <FormattedMessage id="summary.add-button" defaultMessage="Add Expense" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenCount: (state.expenses.length - visibleExpenses.length)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

