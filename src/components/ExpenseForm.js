import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import DropdownList from './DropdownList';
import types_en from '../models/expense-types_en';
import types_th from '../models/expense-types_th';

export  class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            type: props.expense ? props.expense.type : 0 ,
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onTypeChange = (selectedType) => {
        const type = selectedType.value;
        this.setState(() => ({ type }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));

        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                type: this.state.type,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error &&
                    <FormattedMessage id="expense-form.invalid" defaultMessage="expense-form.invalid">
                        {(txt) => (
                            <p className="form__error"> {txt}</p>
                        )}
                    </FormattedMessage>
                }
                <FormattedMessage id="expense-form.description" defaultMessage="Description">
                    {(txt) => (
                        <input
                            type="text"
                            placeholder={txt}
                            autoFocus
                            className="text-input"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    )}
                </FormattedMessage>

                <DropdownList
                    types={this.props.types}
                    value={this.state.type}
                    handleChange={this.onTypeChange}
                    selectedValue={this.state.type}
                />

                <FormattedMessage id="expense-form.amount" defaultMessage="Amount">
                    {(txt) => (
                        <input
                            type="text"
                            placeholder={txt}
                            className="text-input"
                            value={this.state.amount}
                            onChange={this.onAmountChange}

                        />
                    )}
                </FormattedMessage>

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <FormattedMessage id="expense-form.note" defaultMessage="Add a note for your expense (optional)">
                    {(txt) => (
                        <textarea
                            placeholder={txt}
                            value={this.state.note}
                            className="textarea"
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                    )}
                </FormattedMessage>
                <div>
                    <FormattedMessage id="expense-add.button" defaultMessage="Add Expense">
                        {(txt) => (
                            <button className="button">{txt}</button>
                        )}
                    </FormattedMessage>


                </div>

            </form>

        );
    }
}


const mapStateToProps = (state, props) => ({
    types: state.locale.lang === 'en' ? types_en : types_th
});



export default connect(mapStateToProps)(ExpenseForm);