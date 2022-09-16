import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { index } from './Store';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={index}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

