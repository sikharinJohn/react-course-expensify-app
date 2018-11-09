import modalReducer from '../../reducers/modal';

test('should setup default modal value', () =>{
    const state = modalReducer({}, { type: '@@INIT'});
    expect(state).toEqual({});
    expect(state.opened).toBeFalsy();
});

test('should set opened when open modal', () =>{
    const action = {
        type: 'OPEN_MODAL'
    };
    const state = modalReducer({}, action);
    expect(state.opened).toBeTruthy();
});

test('should set opened when close modal', () =>{
    const action = {
        type: 'CLOSE_MODAL'
    };
    const state = modalReducer({}, action);
    expect(state.opened).toBeFalsy();
});