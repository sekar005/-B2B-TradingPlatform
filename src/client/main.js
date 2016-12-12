import React from 'react';
import { render } from 'react-dom';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import ViewCompanyComponent from './components/CompanyProfile/ViewCompanyProfile/ViewCompanyComponent';
import CartComponent from './components/Cart/CartComponent';
import { Router, Route, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/viewCompany" component={ViewCompanyComponent} />
        <Route path="/cart" component={CartComponent} />
    </Router>
), document.getElementById('app'));
