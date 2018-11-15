import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { FormattedMessage } from 'react-intl';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(moment(startDate));
        this.props.setEndDate(moment(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }

    };

    render() {
        moment.locale('th_TH');
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item" >
                        <FormattedMessage id="filters.search.expenses" >
                            {(txt) => (
                                <input
                                    type="text"
                                    className="text-input"
                                    value={this.props.filters.text}
                                    onChange={this.onTextChange}
                                    placeholder={txt}
                                />
                            )}
                        </FormattedMessage>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <FormattedMessage id="filters.date" >
                                {(txt) => (
                                    <option value="date">
                                        {txt}
                                    </option>

                                )}
                            </FormattedMessage>
                            <FormattedMessage id="filters.amount" >
                                {(txt) => (
                                    <option value="amount">
                                        {txt}
                                    </option>

                                )}
                            </FormattedMessage>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            monthFormat={'MMMM YYYY'}

                        />

                        
                    </div>

                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    filters: state.filters,
    lang: state.locale.lang  
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
