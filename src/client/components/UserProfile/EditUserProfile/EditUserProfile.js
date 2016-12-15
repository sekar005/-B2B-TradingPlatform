import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    form: {
        margin: 20
    },
    box: {
        marginTop: 5,
        marginBottom: 5
    },
    field: {
        marginLeft: 5,
        marginRight: 5
    },
    button: {
        margin: 10
    }
}

export default class EditUserProfile extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div>
                        <img src="src/images/profile-icon.png" width="100px"/>
                    </div>
                    <div>
                        <div style={styles.box}>
                            <label>Vorname: </label><TextField hintText="Vorname" defaultValue="Max" style={styles.field} />
                            <label>Nachname: </label><TextField hintText="Nachname" defaultValue="Mustermann" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>Adresse: </label><TextField hintText="Adresse" defaultValue="Musterstraße 1, 44444 Musterhausen" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>E-Mail: </label><TextField hintText="E-Mail" defaultValue="mail@mail.com" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>Altes Passwort: </label><TextField type="password" hintText="altes Passwort" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>Neues Passwort: </label><TextField type="password" hintText="neues Passwort" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>Neues Passwort wiederholen: </label><TextField type="password" hintText="neues Passwort wiederholen" style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <RaisedButton label="Abbrechen"  containerElement={<Link to="/viewUserProfile" />}
                                          linkButton={true} primary={true} style={styles.button} />
                            <RaisedButton label="Speichern"  containerElement={<Link to="/viewUserProfile" />}
                                          linkButton={true} primary={true} style={styles.button} />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}