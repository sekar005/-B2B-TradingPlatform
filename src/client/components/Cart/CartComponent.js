/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
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

export default class CartComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h2 style={styles.headline}>Warenkorb</h2>
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>Bild</TableHeaderColumn>
                                <TableHeaderColumn>Produkt</TableHeaderColumn>
                                <TableHeaderColumn>Kategorie</TableHeaderColumn>
                                <TableHeaderColumn>Preis</TableHeaderColumn>
                                <TableHeaderColumn>Bestellen</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn><img src="src/images/ExampleImage.png" width="100px"/></TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton label="Produkt 1"  primary={true} containerElement={<Link to="/viewProductProfile" />}
                                                linkButton={true} />
                                </TableRowColumn>
                                <TableRowColumn>Metall</TableRowColumn>
                                <TableRowColumn>5€</TableRowColumn>
                                <TableRowColumn><input type="number" min="1" defaultValue={1}/> <ActionHighlightOff/></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div style={styles.button}>
                        <RaisedButton label="Bestellen" containerElement={<Link to="/viewCompany" />}
                                      linkButton={true} primary={true} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}