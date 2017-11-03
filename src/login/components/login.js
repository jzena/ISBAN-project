import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2>
                    <FormattedMessage id="login.title" />
                </h2>
                <div>
                    <label className="field"><FormattedMessage id="login.user" /></label> <input type="text" />
                </div>
                <div>
                    <span className="field"><FormattedMessage id="login.password" /></span> <input type="password" />
                </div>
                <div className="keyboard">
                    KEYBOARD
                </div>
                <div className="links">
                    <Link to="/changePassword"><FormattedMessage id="login.change.password" /></Link> |
                    <Link to="/forgottenPassword"><FormattedMessage id="login.forgotten.password" /></Link> |
                    <Link to="/"><FormattedMessage id="login.enter" /></Link>
                </div>
            </div>
        );
    }
}

export default Login;