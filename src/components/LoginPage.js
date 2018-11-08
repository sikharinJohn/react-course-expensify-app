import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startFbLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, startFbLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <div className="box-layout__login" >
                <button className="button" onClick={startLogin} >Login with Google</button>
                <button className="button" onClick={startFbLogin} >Login with Facebook</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFbLogin: () => dispatch(startFbLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
