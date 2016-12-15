/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';

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

export default class ViewCompanyComponent extends React.Component{

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Abbrechen"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Löschen"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <MuiThemeProvider>

                <div>
                    <div style={styles.picture}><img src="src/images/profile-icon.png" width="100px"/></div>
                    <div style={styles.center}>
                        <p>Firmenname: Musterfirma</p>
                        <p>Branche: Metall</p>
                        <p>Adresse: Musterstr. 1, 12345 Musterhausen</p>
                        <p>Email: mail@firma.de</p>
                        <p>Telefon: 12345/6789</p>
                        <p>Fax: 12345/6789</p>
                        <p>Webseite: http://www.musterfirma.de</p>
                    </div>
                    <div style={styles.button}>
                        <RaisedButton label="Bearbeiten"/>
                    </div>
                    <div>
                        <h2 style={styles.headline}>Produkte</h2>
                        <Link to="/addProduct"><AddCircle style={styles.icon} color={red500} /></Link>
                        <Table>
                            <TableHeader displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>Bild</TableHeaderColumn>
                                    <TableHeaderColumn>Produkt</TableHeaderColumn>
                                    <TableHeaderColumn>Kategorie</TableHeaderColumn>
                                    <TableHeaderColumn>Preis</TableHeaderColumn>
                                    <TableHeaderColumn>Aktionen</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton label="Produkt 1"  primary={true} />
                                    </TableRowColumn>
                                    <TableRowColumn>Metall</TableRowColumn>
                                    <TableRowColumn>5€</TableRowColumn>
                                    <TableRowColumn>
                                        <IconButton tooltip="SVG Icon" onClick={this.handleOpen}>
                                            <ActionDelete />
                                        </IconButton>
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <Dialog
                        title="Löschen"
                        actions={actions}
                        modal={true}
                        open={this.state.open}>
                        Produkt wirklich löschen?
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}