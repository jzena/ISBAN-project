import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './login/components/login';
import SubMenu from './login/components/subMenu';
import SubMenuLanguages from './login/components/subMenuLanguages';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import messages from './login/messages.json';

addLocaleData([...en, ...es]);


const HeaderDate = () => {
  return (
    <div className="div_date">Thursday, 02 November 2017</div>
  )
}

const repo = `/${window.location.pathname.split('/')[1]}`;

const App = (props) => {
  const hola = () => {
    const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';
    props.setLanguage(locale);
  }
  return (
    <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      <Router basename={repo}>
        <div>
          <SubMenuLanguages />
          <HeaderDate />
          <SubMenu />
          <Route exact path="/" component={Login} />
          {hola()}
        </div>
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    locale: state.setLanguage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (locale) => {
      dispatch({ type: 'SET_LANGUAGE', language: locale })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
