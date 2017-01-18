import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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
            height: '300px',
            number: 1,
            product: '',
            company: '',
            price: '',
            fullPrice: '',
            date: '',
            orderable: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.rowSelection = this.rowSelection.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider>
                <form role='form' action={this.state.url} onSubmit={this.onSubmit} method="post">
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
                                    <TableHeaderColumn tooltip="Bild">Bild</TableHeaderColumn>
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
                        <input type="number" min="1" max="1000" value={this.state.number} />
                        <RaisedButton type="submit">Bestellen</RaisedButton>
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }

    rowSelection(key) {
        if(typeof tableData[key] !== 'undefined') {
            this.state.product = tableData[key].product;
            this.state.company = tableData[key].company;
            this.state.number = tableData[key].number;
            this.state.price = tableData[key].price;
            this.state.status = tableData[key].status;
            this.state.orderable = true;
        } else {
            this.state.product = '';
            this.state.company = '';
            this.state.number = 1;
            this.state.price = '';
            this.state.status = '';
            this.state.orderable = false;
        }
        console.log(tableData[key]);
    }

    onSubmit(event) {
        fetch('/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderNo: '1234',
                date: this.state.date,
                product: this.state.product,
                company: this.state.company,
                number: this.state.number,
                price: this.state.price,
                status: this.state.status
            })
        })

        console.log('Submitted');

        fetch('/orders')
            .then((response) => {
                return response.json();
            }).then((data) => {
            this.setState( {data: data});
            console.log(data);
        }).catch((e) => {
            console.log(e);
        });

        event.preventDefault();
        document.location.href = '/#/productSearch';
    }
}