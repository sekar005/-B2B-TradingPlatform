import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

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

    render() {
        return (
            <MuiThemeProvider>
                <div>
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
                                <TableHeaderColumn tooltip="Bestellen">Bestellen</TableHeaderColumn>
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
                                    <TableRowColumn>{row.image}</TableRowColumn>
                                    <TableRowColumn>{row.product}</TableRowColumn>
                                    <TableRowColumn>{row.company}</TableRowColumn>
                                    <TableRowColumn>{row.category}</TableRowColumn>
                                    <TableRowColumn>{row.price}</TableRowColumn>
                                    <TableRowColumn>{row.order}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        );
    }
}