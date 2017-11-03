import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './login/components/login';
import SubMenu from './login/components/subMenu';
import SubMenuLanguages from './login/components/subMenuLanguages';
// import Terms from './login/components/terms';
// import Policy from './login/components/policy';
// import About from './login/components/about';
// import CustomerService from './login/components/customerService';

// import { addLocaleData, IntlProvider } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import es from 'react-intl/locale-data/es';
// import fr from 'react-intl/locale-data/fr';
// import de from 'react-intl/locale-data/de';
// import it from 'react-intl/locale-data/it';
// import br from 'react-intl/locale-data/br';
import messages from './login/messages.json';


// addLocaleData([...en, ...es, ...fr, ...de, ...it, ...br]);
// addLocaleData([...en, ...es]);


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

    // <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      <Router basename={repo}>
        <div>
          <div className="div_language">
            {renderLanguage()}
          </div>
          <HeaderDate />
          <SubMenu />
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/terms" component={Terms} />
          <Route exact path="/policy" component={Policy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/customerService" component={CustomerService} /> */}
        </div>
      </Router>
    // </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    locale: state.setLanguage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setDefaultLanguage: (locale) => {
      dispatch({ type: 'SET_DEFAULT_LANGUAGE', language: locale })
    },
    setLanguage: (locale) => {
      dispatch({ type: 'SET_LANGUAGE', language: locale })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
