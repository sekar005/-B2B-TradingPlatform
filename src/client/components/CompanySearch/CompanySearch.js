import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CommunicationEmail from 'material-ui/svg-icons/communication/email'

const tableData = [
    {
        company: 'Musterfirma 1',
        address: 'Musterstr. 1, 12345 Musterhausen',
        category: 'Metall',
        email: 'firma1@mustermail.de'
    },
    {
        company: 'Musterfirma 2',
        address: 'Musterstr. 2, 12345 Musterhausen',
        category: 'Textil',
        email: 'firma2@mustermail.de'
    },
    {
        company: 'Musterfirma 3',
        address: 'Musterstr. 3, 12345 Musterhausen',
        category: 'Holz',
        email: 'firma3@mustermail.de'
    },
    {
        company: 'Musterfirma 4',
        address: 'Musterstr. 4, 12345 Musterhausen',
        category: 'Handwerk',
        email: 'firma4@mustermail.de'
    }
]

export default class CompanySearch extends React.Component{

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
                                <TableHeaderColumn>Firma</TableHeaderColumn>
                                <TableHeaderColumn>Adresse</TableHeaderColumn>
                                <TableHeaderColumn>Branche</TableHeaderColumn>
                                <TableHeaderColumn>Email</TableHeaderColumn>
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
                                    <TableRowColumn><Link to="/viewCompany">{row.company}</Link></TableRowColumn>
                                    <TableRowColumn>{row.address}</TableRowColumn>
                                    <TableRowColumn>{row.category}</TableRowColumn>
                                    <TableRowColumn><a href="mailto:firma1@mustermail.de">{row.email}<CommunicationEmail/></a></TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        );
    }

}