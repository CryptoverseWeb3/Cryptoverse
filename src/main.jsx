import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App'
import store from './app/store';

import 'antd/dist/antd.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basepath="Cryptoverse/">
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>
)
