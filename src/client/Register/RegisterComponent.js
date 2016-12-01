/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
    paper: {
        height: 250,
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
        textAlign: 'center',
        fontWeight: 400
    }
};

class RegisterComponent extends React.Component {

    render() {
        return (
        <div>
            <h2 style={styles.headline}>B2B</h2>
            <Paper style={styles.paper} zDepth={1}>
                <TextField
                    hintText="Email Adresse"
                    floatingLabelText="Email"
                /><br/>
                <TextField
                    hintText="Name"
                    floatingLabelText="Name"
                /><br/>
                <TextField
                    hintText="Vorname"
                    floatingLabelText="Vorname"
                /><br/>
                <TextField
                    hintText="Adresse"
                    floatingLabelText="Adresse"
                /><br/>
                <TextField
                    hintText="Passwort"
                    floatingLabelText="Passwort"
                    type="password"
                /><br/>
                <TextField
                    hintText="Passwort"
                    floatingLabelText="Passwort wiederholen"
                    type="password"
                /><br/>
                <RaisedButton label="Registrieren" style={styles.button} />
            </Paper>
        </div>
        );
    }
}

export default RegisterComponent;