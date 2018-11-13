import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                    <FormattedMessage id="expense-add.button" defaultMessage="Add Expense">
                        {(txt) => (
                            <h1 className="page-header__title">{txt}</h1>
                        )}
                    </FormattedMessage>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);