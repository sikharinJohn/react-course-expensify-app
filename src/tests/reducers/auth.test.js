import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('should setup default auth value', () =>{
    const state = authReducer({}, { type: '@@INIT'});
    expect(state).toEqual({});
});

test('should set uid for login', () =>{
    const uid = expenses[1].id;
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () =>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything'},action);
    expect(state).toEqual({});
});
