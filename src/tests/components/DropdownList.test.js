import React from 'react';
import { shallow } from 'enzyme';
import DropdownList from '../../components/DropdownList';
import types from '../../models/expense-types';

test ('should render DropdownList correctly', () => {
    const wrapper = shallow(<DropdownList  types={types}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call DropdownList on change', () =>{
    const onTypeChange = jest.fn();
    const wrapper = shallow(<DropdownList 
        types={types}
        handleChange={onTypeChange} 
        />);
    wrapper.simulate('change', { target: { value: 'Gift' } });
    expect(onTypeChange).toHaveBeenCalled();
});