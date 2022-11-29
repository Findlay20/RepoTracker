import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import App from './App'

// const store = createStore()

ReactDOM.render(
        // <Provider store={store}>
            <App className='bg-dark text-white' />,
        // </Provider>,
document.getElementById("root"));