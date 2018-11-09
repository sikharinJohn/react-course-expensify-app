import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/ConfirmModal';

test('should render ConfirmModal correctly', () => {
    const wrapper = shallow(<ConfirmModal
        title="You want to remove this expense?"
        openedModal={true}
        handleCloseModal={ () => { } }
        handleConfirmModal={ () =>{ } }
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should close ConfirmModal correctly', () => {
    const wrapper = shallow(<ConfirmModal
        title="You want to remove this expense?"
        openedModal={false}
        handleCloseModal={ () => { } }
        handleConfirmModal={ () =>{ } }
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should ConfirmModal on Yes button click', () => {
    const confirmModal = jest.fn();
    const wrapper = shallow(<ConfirmModal
        title="You want to remove this expense?"
        openedModal={true}
        handleCloseModal={() => { } }
        handleConfirmModal={confirmModal}
    />);
    wrapper.find('button').at(0).simulate('click');
    expect(confirmModal).toHaveBeenCalled();
});

test('should close ConfirmModal on No button click', () => {
    const closeModal = jest.fn();
    const wrapper = shallow(<ConfirmModal
        title="You want to remove this expense?"
        openedModal={true}
        handleCloseModal={closeModal}
        handleConfirmModal={ () =>{ } }
    />);
    wrapper.find('button').at(1).simulate('click');
    expect(closeModal).toHaveBeenCalled();
});