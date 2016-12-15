/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

const styles = {
    paper: {
        height: 470,
        width: 400,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    button: {
        margin: 12
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    center: {
        textAlign: 'center'
    },
    picture: {
        margin: 14,
        textAlign: 'center',
        float : 'center'
    }
};

export default class EditProductComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
        <div style={styles.center}>
            <h2 style={styles.headline}>B2B</h2>
            <Paper style={styles.paper} zDepth={1}>
                <div style={styles.picture}><img src="src/images/profile-icon.png" width="100px"/></div>
                <RaisedButton label="Bild ändern" style={styles.button}/>
                <TextField
                    defaultValue="Produkt 1"
                    hintText="Produktname"
                    floatingLabelText="Name"
                /><br/>
                <TextField
                    defaultValue="Metall"
                    hintText="Kategorie"
                    floatingLabelText="Kategorie"
                /><br/>
                <TextField
                    defaultValue="5 €"
                    hintText="Preis"
                    floatingLabelText="Preis"
                /><br/>
                <FlatButton label="Abbrechen" containerElement={<Link to="/viewCompany" />}
                            linkButton={true} primary={true} />
                <RaisedButton label="OK" style={styles.button} containerElement={<Link to="/viewCompany" />}
                              linkButton={true}/>
            </Paper>
        </div>
            </MuiThemeProvider>
        );
    }
}