import { login, logout } from '../../actions/auth';
import expenses from '../fixtures/expenses';

test('should generate login action object', () =>{
    const uid = expenses[0].id;
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () =>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
