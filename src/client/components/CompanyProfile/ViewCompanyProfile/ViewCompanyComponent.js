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
import ContentCreate from 'material-ui/svg-icons/content/create';
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
    justify: {
        textAlign: 'justify',
        marginLeft: 300
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

const tableData = [
    {
        image: <img src="src/images/ExampleImage.png" width="100px"/>,
        product: 'Produkt 1',
        category: 'Metall',
        price: '5€'
    }
];

const profileData = {
    name: 'Musterfirma',
    branch: 'Metall',
    address: 'Musterstr. 1, 12345 Musterhausen',
    email: 'mail@firma.de',
    phone: '12345/6789',
    fax: '12345/6789',
    webpage: 'http://www.musterfirma.de'
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
                    <div style={styles.justify}>
                        <p>Firmenname: {profileData.name}</p>
                        <p>Branche: {profileData.branch}</p>
                        <p>Adresse: {profileData.address}</p>
                        <p>Email: {profileData.email}</p>
                        <p>Telefon: {profileData.phone}</p>
                        <p>Fax: {profileData.fax}</p>
                        <p>Webseite: {profileData.webpage}</p>
                    </div>
                    <div style={styles.button}>
                        <RaisedButton label="Bearbeiten" containerElement={<Link to="/editCompany" />}
                                      linkButton={true}/>
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
                                {tableData.map( (row, index) => (
                                    <TableRow key={index} selected={row.selected}>
                                        <TableRowColumn>{row.image}</TableRowColumn>
                                        <TableRowColumn>
                                            <FlatButton label={row.product}  primary={true} containerElement={<Link to="/viewProductProfile" />}
                                                        linkButton={true}/>
                                        </TableRowColumn>
                                        <TableRowColumn>{row.category}</TableRowColumn>
                                        <TableRowColumn>{row.price}</TableRowColumn>
                                        <TableRowColumn><IconButton tooltip="SVG Icon" onClick={this.handleOpen}>
                                            <ActionDelete />
                                        </IconButton>
                                            <Link to="/editProduct">
                                                <IconButton tooltip="SVG Icon">
                                                    <ContentCreate />
                                                </IconButton>
                                            </Link>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
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