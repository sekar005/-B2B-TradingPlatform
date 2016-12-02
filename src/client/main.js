import React from 'react';
import { render } from 'react-dom';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import { Router, Route, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
    </Router>
), document.getElementById('app'));
