if(!global.Intl) {
  global.Intl = require('intl');
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { getLocale } from 'actions/locale';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
addLocaleData([...en, ...ko]);

import msg_en from 'locales/en';
import msg_ko from 'locales/ko';

const messages = {
  en: msg_en,
  ko: msg_ko
};

import Header from 'containers/Header';

class App extends Component {
  static store(state) {
    return {
      locale: state.locale
    };
  }

  componentWillMount() {
    const { getLocale } = this.props;

    getLocale();
  }

  render() {
    const { children, locale } = this.props;

    if ( !locale || locale === '' ) { return null; }

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <div>
          <div className="header">
            <Header/>
          </div>
          <div className="App">
            {children}
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default withRouter(connect(App.store, { getLocale })(App));
