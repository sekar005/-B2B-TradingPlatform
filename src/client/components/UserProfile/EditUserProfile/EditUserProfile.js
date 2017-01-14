import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cookie from 'react-cookie';

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

    constructor() {
        super();

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        var userId = cookie.load('userId');
        fetch('/users/' + userId)
            .then((response) => {
                return response.json();
            }).then((data) => {
            this.setState( {data: data});
        }).catch((e) => {
            console.log(e);
        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div>
                        <img src="src/images/profile-icon.png" width="100px"/>
                    </div>
                    <div>
                        <div style={styles.box}>
                            <label>Vorname: </label><TextField hintText="Vorname" value={this.state.data.firstName} style={styles.field} />
                            <label>Nachname: </label><TextField hintText="Nachname" value={this.state.data.name} style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>Adresse: </label><TextField hintText="Adresse" value={this.state.data.address} style={styles.field} />
                        </div>
                        <div style={styles.box}>
                            <label>E-Mail: </label><TextField hintText="E-Mail" value={this.state.data.email} style={styles.field} />
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