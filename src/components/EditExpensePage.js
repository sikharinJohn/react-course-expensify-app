import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { confirmAlert } from 'react-confirm-alert';
import { editExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <p>You want to remove this expense?</p>
                        <button onClick={() => {
                            this.props.startRemoveExpense({ id: this.props.expense.id });
                            this.props.history.push('/');
                            onClose()
                        }}>Yes</button>
                        <button onClick={onClose}>No</button>
                    </div>
                )
            }
        });
    };


    render() {
        return (

            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">

                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary " onClick={this.onRemove}>Remove Expense</button>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);