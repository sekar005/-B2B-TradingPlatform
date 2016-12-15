import React from 'react';
import { render } from 'react-dom';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import ViewCompanyComponent from './components/CompanyProfile/ViewCompanyProfile/ViewCompanyComponent';
import CartComponent from './components/Cart/CartComponent';
import TemplateComponent from './components/Template/TemplateComponent';
import ViewUserProfile from './components/UserProfile/ViewUserProfile/ViewUserProfile';
import EditUserProfile from './components/UserProfile/EditUserProfile/EditUserProfile';
import ViewProductProfile from './components/ProductProfile/ViewProductProfile/ViewProductProfile';
import ProductSearch from './components/ProductSearch/ProductSearch';
import { Router, Route, hashHistory, Redirect } from 'react-router'
import AddProductComponent from './components/CompanyProfile/AddProductDialog/AddProductComponent';
import EditProductComponent from './components/CompanyProfile/EditProductDialog/EditProductComponent';
import AddAdvertisementComponent from './components/Advertisement/AddAdvertisementDialog/AddAdvertisementComponent';
import AdvertisementDetailsComponent from './components/Advertisement/AdvertisementDetails/AdvertisementDetailsComponent';
import ReactOnAdvertisementcomponent from './components/Advertisement/ReactOnAdvertisementDialog/ReactOnAdvertisementComponent';
import OfferListComponent from './components/Advertisement/OfferList/OfferListComponent';
import ReactOnOfferComponent from './components/Advertisement/ReactOnOfferDialog/ReactOnOfferComponent';

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
            <Route path="/editUserProfile" component={EditUserProfile} />
            <Route path="/viewProductProfile" component={ViewProductProfile} />
            <Route path="/productSearch" component={ProductSearch} />
            <Route path="/addAdvertisement" component={AddAdvertisementComponent} />
            <Route path="/adDetails" component={AdvertisementDetailsComponent} />
            <Route path="/adReact" component={ReactOnAdvertisementcomponent} />
            <Route path="/offers" component={OfferListComponent} />
            <Route path="/reactOffer" component={ReactOnOfferComponent} />
        </Route>
    </Router>
), document.getElementById('app'));
