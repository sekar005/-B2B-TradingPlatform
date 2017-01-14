/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    paper: {
        height: 500,
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
    }
};

export default class RegisterComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
        <div style={styles.center}>
            <h2 style={styles.headline}>B2B</h2>
            <Paper style={styles.paper} zDepth={1}>
                <form role='form' action="/users" method="post">
                    <TextField
                        hintText="Email Adresse"
                        floatingLabelText="Email"
                        name="email"
                    /><br/>
                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        name="name"
                    /><br/>
                    <TextField
                        hintText="Vorname"
                        floatingLabelText="Vorname"
                        name="firstName"
                    /><br/>
                    <TextField
                        hintText="Adresse"
                        floatingLabelText="Adresse"
                        name="address"
                    /><br/>
                    <TextField
                        hintText="Passwort"
                        floatingLabelText="Passwort"
                        type="password"
                        name="password"
                    /><br/>
                    <TextField
                        hintText="Passwort"
                        floatingLabelText="Passwort wiederholen"
                        type="password"
                        name="doublePassword"
                    /><br/>
                    <RaisedButton type="submit" label="Registrieren" style={styles.button} primary={true}/>
               </form>
            </Paper>
        </div>
            </MuiThemeProvider>
        );
    }
}