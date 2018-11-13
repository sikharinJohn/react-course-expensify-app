import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import App from './components/App';


const store = configureStore();
const jsx = (
   <App store={store} />
);

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
            try {
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            } catch (error) {
                console.log(error);
            }
            
        });
    } else {
        store.dispatch(logout());
        renderApp();
        // history.push('/');
    }
})


