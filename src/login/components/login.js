import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>
                    <FormattedMessage id="login.title" />                    
                </h2>
            </div>
        );
    }
}

export default Login;