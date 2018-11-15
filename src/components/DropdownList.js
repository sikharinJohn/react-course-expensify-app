import React from 'react';
import Select from 'react-select';


const DropdownList = (props) =>  (
    <Select
        options={props.types}
        value={{label: props.types[ props.selectedValue].label, value: props.types[props.selectedValue].value }}
        onChange={props.handleChange}
        selectedValue={props.selectedValue}
    />
);

export default DropdownList;