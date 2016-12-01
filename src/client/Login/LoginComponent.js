/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

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
    }
};

class LoginComponent extends React.Component {

    render() {
        return (
        <div>
            <Paper style={styles.paper} zDepth={1}>
                <TextField
                    hintText="Email Adresse"
                    floatingLabelText="Email"
                /><br/>
                <TextField
                    hintText="Passwort"
                    floatingLabelText="Passwort"
                    type="password"
                /><br/>
                <FlatButton label="Registrieren" primary={true} />
                <RaisedButton label="Login" style={styles.button} />
            </Paper>
        </div>
        );
    }
}

export default LoginComponent;