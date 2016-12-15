/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    paper: {
        height: 250,
        width: 400,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    button: {
        margin: 12,
        textAlign: 'right',
        float : 'right'
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        textAlign: 'left'
    },
    center: {
        textAlign: 'center'
    },
    left: {
        textAlign: 'left'
    },
    icon: {
        textAlign: 'right'
    },
    picture: {
        textAlign: 'left',
        float : 'left'
    }
};

export default class OfferListComponent extends React.Component{


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <h2 style={styles.headline}>Angebote</h2>
                        <Table>
                            <TableHeader displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>Angebot</TableHeaderColumn>
                                    <TableHeaderColumn>Händler</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn><FlatButton label="Angebot" containerElement={<Link to="/reactOffer" />}
                                                                linkButton={true} primary={true} /></TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton label="Händler" containerElement={<Link to="/viewCompany" />}
                                                    linkButton={true} primary={true} />
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}