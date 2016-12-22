import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import OrderDetails from '../OrderDetails/OrderDetails'

const tableData = [
    {
        orderID: '123456',
        date: '01.12.2016',
        product: 'Produkt XYZ',
        vendor: 'Mustermann',
        number: '5',
        price: '200€',
        status: 'in Arbeit'
    },
    {
        orderID: '456789',
        date: '06.12.2016',
        product: 'Schoko-Nikolaus',
        vendor: 'Mustermann',
        number: '100',
        price: '150€',
        status: 'offen'
    },
    {
        orderID: '987654',
        date: '17.12.2016',
        product: 'Produkt ABC',
        vendor: 'Mustermann',
        number: '1',
        price: '49,99€',
        status: 'versandt'
    }
]

export default class IncomingOrder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
        };
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <h1>Eingegangene Bestellungen</h1>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>
                                <TableHeaderColumn>Bestell-Nr.</TableHeaderColumn>
                                <TableHeaderColumn>Datum</TableHeaderColumn>
                                <TableHeaderColumn>Produkt</TableHeaderColumn>
                                <TableHeaderColumn>Händler</TableHeaderColumn>
                                <TableHeaderColumn>Anzahl</TableHeaderColumn>
                                <TableHeaderColumn>Preis gesamt</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {tableData.map( (row, index) => (
                                <TableRow key={index} selected={row.selected}>
                                    <TableRowColumn><OrderDetails orderID={row.orderID}/></TableRowColumn>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                    <TableRowColumn>{row.product}</TableRowColumn>
                                    <TableRowColumn><Link to="/viewUserProfile">{row.vendor}</Link></TableRowColumn>
                                    <TableRowColumn>{row.number}</TableRowColumn>
                                    <TableRowColumn>{row.price}</TableRowColumn>
                                    <TableRowColumn>{row.status}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        );
    }
}