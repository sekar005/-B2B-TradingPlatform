import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderList from '../OrderList/OrderList';

export default class IncomingOrder extends React.Component {

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <h1>Eingegangene Bestellungen</h1>
                    <OrderList haendlerOrFirma="Händler" linkedSite="/viewUserProfile"/>
                </div>
            </MuiThemeProvider>
        );
    }
}