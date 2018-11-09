import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import types from '../models/expense-types';

const DropdownList = (props) => (
    <Select
        options={props.options}
        value={{label:  props.selectedValue, value:  props.selectedValue }}
        onChange={props.handleChange}
        selectedValue={ props.selectedValue }
    />
);



const mapStateToProps = (state, props) => {
    return {
        options: types
    };
};

export default connect(mapStateToProps)(DropdownList);