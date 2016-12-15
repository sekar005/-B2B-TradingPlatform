import React from 'react';
import { render } from 'react-dom';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import ViewCompanyComponent from './components/CompanyProfile/ViewCompanyProfile/ViewCompanyComponent';
import CartComponent from './components/Cart/CartComponent';
import TemplateComponent from './components/Template/TemplateComponent';
import ViewUserProfile from './components/UserProfile/ViewUserProfile/ViewUserProfile';
import { Router, Route, hashHistory, browserHistory, Redirect } from 'react-router'
import AddProductComponent from './components/CompanyProfile/AddProductDialog/AddProductComponent';
import EditProductComponent from './components/CompanyProfile/EditProductDialog/EditProductComponent';
import AddAdvertisementComponent from './components/Advertisement/AddAdvertisementDialog/AddAdvertisementComponent';

render((
    <Router history={hashHistory}>
        <Redirect from="/" to="/login" />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/template" component={TemplateComponent}>
            <Route path="/viewCompany" component={ViewCompanyComponent} />
            <Route path="/addProduct" component={AddProductComponent} />
            <Route path="/editProduct" component={EditProductComponent} />
            <Route path="/cart" component={CartComponent} />
            <Route path="/viewUserProfile" component={ViewUserProfile} />
            <Route path="/addAdvertisement" component={AddAdvertisementComponent} />
        </Route>
    </Router>
), document.getElementById('app'));
