import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';

import Login from './login';
import SubMenu from './subMenu';
import SubMenuLanguages from './subMenuLanguages';
import Terms from './terms';
import Policy from './policy';
import About from './about';
import CustomerService from './customerService';
import ChangePassword from './changePassword';
import ForgottenPassword from './forgottenPassword';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import de from 'react-intl/locale-data/de';
import it from 'react-intl/locale-data/it';
import br from 'react-intl/locale-data/br';
import messages from '../messages.json';


addLocaleData([...en, ...es, ...fr, ...de, ...it, ...br]);

const HeaderDate = () => {
  return (
    <div className="div_date">Thursday, 02 November 2017</div>
  )
}

const repo = `/${window.location.pathname.split('/')[1]}`;

const App = (props) => {

  const renderLanguage = () => {
    const arrayLanguage = ['es', 'en', 'fr', 'de', 'it', 'cn', 'br'];
    return arrayLanguage.map((item, i) => {
      return <SubMenuLanguages key={i} locale={item} changeLanguage={changeLanguage} />
    });
  }

  const changeLanguage = idLocale => {
    props.setLanguage(idLocale);
  }
  return (

    <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      <Router basename={repo}>
        <div>
          <div className="div_language">
            {renderLanguage()}
          </div>
          <HeaderDate />
          <SubMenu />
          <Route exact path="/" component={Login} />
          <Route path="/terms" component={Terms} />
          <Route path="/policy" component={Policy} />
          <Route path="/about" component={About} />
          <Route path="/customerService" component={CustomerService} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/forgottenPassword" component={ForgottenPassword} />
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
