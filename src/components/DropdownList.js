import React from 'react';
import Select from 'react-select';
import types from '../models/expense-types';

const DropdownList = (props) => (
    <Select
        options={types}
        value={{label:  props.selectedValue, value:  props.selectedValue }}
        onChange={props.handleChange}
        selectedValue={ props.selectedValue }
    />
);

export default DropdownList;