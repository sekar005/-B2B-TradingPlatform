import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderList from '../OrderList/OrderList';

export default class OutgoingOrder extends React.Component {

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <h1>Aufgegebene Bestellungen</h1>
                    <OrderList haendlerOrFirma="Firma" linkedSite="/viewCompany"/>
                </div>
            </MuiThemeProvider>
        );
    }
}