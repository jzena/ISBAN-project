import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './login/components/App';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';


import store from './login/store';

ReactDOM.render(
    <Provider store={store}>        
            <App />     
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();
