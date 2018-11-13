import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (

    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile"><FormattedMessage id="expense-list.expenses" defaultMessage="Expenses" /> </div>
            <div className="show-for-desktop"><FormattedMessage id="expense-list.expense" defaultMessage="Expense" />  </div>
            <div className="show-for-desktop"><FormattedMessage id="expense-list.amount" defaultMessage="Amount" /> </div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span><FormattedMessage id="expense-list.emtry" defaultMessage="No expenses" />  </span>
                    </div>

                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

