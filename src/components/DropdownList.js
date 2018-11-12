import React from 'react';
import Select from 'react-select';

const DropdownList = (props) => (
    <Select
        options={props.types}
        value={{label:  props.selectedValue, value:  props.selectedValue }}
        onChange={props.handleChange}
        selectedValue={ props.selectedValue }
    />
);

export default DropdownList;