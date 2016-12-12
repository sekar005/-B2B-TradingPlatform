/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { Link } from 'react-router';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';

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

export default React.createClass({

    render() {
        return (
            <MuiThemeProvider>

                <div>
                    <div>
                        <h2 style={styles.headline}>Warenkorb</h2>
                        <Table>
                            <TableHeader>
                                <TableRow displayRowCheckbox="false">
                                    <TableHeaderColumn>Bild</TableHeaderColumn>
                                    <TableHeaderColumn>Produkt</TableHeaderColumn>
                                    <TableHeaderColumn>Kategorie</TableHeaderColumn>
                                    <TableHeaderColumn>Preis</TableHeaderColumn>
                                    <TableHeaderColumn>Bestellen</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow displayRowCheckbox="false">
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton label="Produkt 1"  primary={true} />
                                    </TableRowColumn>
                                    <TableRowColumn>Metall</TableRowColumn>
                                    <TableRowColumn>5€</TableRowColumn>
                                    <TableRowColumn><input type="number" value="0"/> <ActionHighlightOff/></TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div style={styles.button}>
                            <RaisedButton label="Bestellen" />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
})