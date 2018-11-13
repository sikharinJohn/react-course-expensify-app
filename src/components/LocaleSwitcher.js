import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale } from '../actions/locale';

export class LocaleSwitcher extends Component {

    render() {
        return (
            <div  className="locale">
                <button onClick={() => { this.props.setLocale('en') }} >EN</button>
                <button onClick={() => { this.props.setLocale('th') }}>TH</button>
            </div>
        
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setLocale: (lang) => dispatch(setLocale(lang))
});

export default connect(undefined, mapDispatchToProps)(LocaleSwitcher)



