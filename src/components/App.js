import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import th from 'react-intl/locale-data/th';
import moment from 'moment';
import AppRouter, { history } from '../routers/AppRouter';

import messages_en from "../translations/en.json";
import messages_th from "../translations/th.json";


addLocaleData([...en, ...th]);

const messages = {
    'en': messages_en,
    'th': messages_th,
};


export class App extends Component {
 
    render() {
        moment.locale(this.props.lang);
        const { store, lang} = this.props;
        return (
            <IntlProvider
                locale={lang}
                messages={messages[lang]}>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </IntlProvider>
        )
    }
}


const mapStateToProps = (state) => ({
    lang: state.locale.lang
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

