import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderList from '../OrderList/OrderList';

export default class OutgoingOrder extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px'
        };
    }

    componentDidMount() {
        fetch('/orders')
            .then((response) => {
                return response.json();
            }).then((data) => {
            this.setState( {data: data});
            console.log(data);
        }).catch((e) => {
            console.log(e);
        });
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <h1>Aufgegebene Bestellungen</h1>
                    <OrderList tableData={this.state.data} haendlerOrFirma="Firma" linkedSite="/viewCompany"/>
                </div>
            </MuiThemeProvider>
        );
    }
}