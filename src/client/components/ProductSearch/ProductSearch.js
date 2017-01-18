import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import NumericInput from 'react-numeric-input';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import cookie from 'react-cookie';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [
    {
        image: 'src/images/profile-icon.png',
        product: 'Produkt 1',
        company: 'Firma 1',
        category: 'Metall',
        price: '3.33',
        order: 'Insert buttons here'
    },
    {
        image: 'Insert image here',
        product: 'Produkt 2',
        company: 'Firma 2',
        category: 'Metall',
        price: '7.33',
        order: 'Insert buttons here'
    },
    {
        image: 'Insert image here',
        product: 'Produkt 3',
        company: 'Firma 3',
        category: 'Metall',
        price: '5.33',
        order: 'Insert buttons here'
    },
    {
        image: 'Insert image here',
        product: 'Produkt 4',
        company: 'Firma 4',
        category: 'Metall',
        price: '5.33',
        order: 'Insert buttons here'
    }
];

export default class ProductSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openFail: false,
            openSuccess: false,
            data: [],
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '300px',
            number: 1,
            product: '',
            company: '',
            price: '',
            fullPrice: '',
            date: '2017-01-18',
            status: 'offen',
            orderable: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.rowSelection = this.rowSelection.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.handleCloseFail = this.handleCloseFail.bind(this);
        this.handleCloseSuccess = this.handleCloseSuccess.bind(this);
    }

    render() {
        const actionsFail = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.handleCloseFail}
            />,
        ];
        const actionsSuccess = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.handleCloseSuccess}
            />,
        ];


        return (
            <MuiThemeProvider>
                <form role='form' action={this.state.url} onSubmit={this.onSubmit}>
                    <div>
                        <Table
                            height={this.state.height}
                            fixedHeader={this.state.fixedHeader}
                            fixedFooter={this.state.fixedFooter}
                            selectable={this.state.selectable}
                            multiSelectable={this.state.multiSelectable}
                            onRowSelection={this.rowSelection}
                        >
                            <TableHeader
                                displaySelectAll={this.state.showCheckboxes}
                                adjustForCheckbox={this.state.showCheckboxes}
                                enableSelectAll={this.state.enableSelectAll}
                            >
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" tooltip="Produktsuche - Ergebnisse für 'Mustersuche'" style={{textAlign: 'center'}}>
                                        Produktsuche - Ergebnisse für "Mustersuche"
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="Produkt">Produkt</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Firma">Firma</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Kategorie">Kategorie</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Preis">Preis</TableHeaderColumn>
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
                                        <TableRowColumn>{row.product}</TableRowColumn>
                                        <TableRowColumn>{row.company}</TableRowColumn>
                                        <TableRowColumn>{row.category}</TableRowColumn>
                                        <TableRowColumn>{row.price}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <NumericInput min={0} max={1000} value={this.state.number} onChange={this.changeNumber} />
                        <RaisedButton type="submit">Bestellen</RaisedButton>
                    </div>
                    <Dialog
                        title="Bestellen erfolgreich"
                        actions={actionsSuccess}
                        modal={false}
                        open={this.state.openSuccess}
                        onRequestClose={this.handleCloseSuccess}
                    >
                        Die Bestellung wurde erfolgreich durchgeführt.
                    </Dialog>
                    <Dialog
                        title="Bestellen fehlgeschlagen"
                        actions={actionsFail}
                        modal={false}
                        open={this.state.openFail}
                        onRequestClose={this.handleCloseFail}
                    >
                        Die Bestellung konnte nicht durchgeführt werden.
                    </Dialog>
                </form>
            </MuiThemeProvider>
        );
    }

    handleCloseSuccess() {
        this.setState({openSuccess: false});
    }

    handleCloseFail() {
        this.setState({openSuccess: false});
    }

    changeNumber(valueAsNumber) {
        this.state.number = valueAsNumber;
    }

    rowSelection(key) {
        if(typeof tableData[key] !== 'undefined') {
            this.state.product = tableData[key].product;
            this.state.company = tableData[key].company;
            this.state.price = tableData[key].price;
            this.state.orderable = true;
        } else {
            this.state.product = '';
            this.state.company = '';
            this.state.price = '';
            this.state.orderable = false;
        }
    }

    onSubmit(event) {
        if(this.state.orderable) {
            var userId = cookie.load('userId');
            var date = new Date();
            var dateStr = date.toDateString();

            fetch('/orders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderNo: '1234',
                    date: dateStr,
                    product: this.state.product,
                    company: this.state.company,
                    userId: userId,
                    number: this.state.number,
                    price: this.state.price,
                    status: this.state.status
                })
            })

            event.preventDefault();
            this.setState({
                number: 1,
                openSuccess: true
            });
        } else {
            event.preventDefault();
            this.setState({
                openFail: true
            });
        }
    }
}