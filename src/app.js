import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import ConfirmModal from './components/ConfirmModal';
import DropdownList from './components/DropdownList';

const store = configureStore();

const state = store.getState();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



// const handleChange = (selectedOption) => {

//     console.log(`Option selected:`, selectedOption.value);
// }

// ReactDOM.render(<DropdownList
//     options={options}
//     handleChange={handleChange}
// />, document.getElementById('app'));
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('uid', user.uid);
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        // history.push('/');
    }
})


