import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ExpenseForm from './ExpenseForm';
import ConfirmModal from './ConfirmModal';
import { editExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';
import { openModal, closeModal } from '../actions/modal';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.closeModal();
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <FormattedMessage id="expense-edit" defaultMessage="Edit Expense">
                            {(txt) => (
                                <h1 className="page-header__title">{txt}</h1>
                            )}
                        </FormattedMessage>

                    </div>
                </div>
                <div className="content-container">

                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <FormattedMessage id="expense-remove.button" defaultMessage="Remove Expense">
                        {(txt) => (
                            <button className="button button--secondary " onClick={this.props.openModal}>{txt}</button>
                        )}
                    </FormattedMessage>
                </div>
                <ConfirmModal
                    title="You want to remove this expense?"
                    openedModal={this.props.openedModal}
                    handleCloseModal={this.props.closeModal}
                    handleConfirmModal={this.onRemove}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    openedModal: state.modal.opened
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);