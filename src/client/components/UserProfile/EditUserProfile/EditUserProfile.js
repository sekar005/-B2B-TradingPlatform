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
            data: {},
            firstName: '',
            name: '',
            address: '',
            email: '',
            oldPassword: '',
            newPassword: '',
            newPasswordDouble: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleNewPasswordDoubleChange = this.handleNewPasswordDoubleChange.bind(this);
    }

    componentDidMount() {
        var userId = cookie.load('userId');
        fetch('/users/' + userId)
            .then((response) => {
                return response.json();
            }).then((data) => {
            this.setState( {data:data});
            this.setState( {firstName: data.firstName});
            this.setState( {name: data.name});
            this.setState( {address: data.address});
            this.setState( {email: data.email});
        }).catch((e) => {
            console.log(e);
        });
    }

    handleSubmit(event) {
        var userId = cookie.load('userId');
        fetch('/users/' + userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                newPasswordDouble: this.state.newPasswordDouble
            })
        })

        event.preventDefault();
        document.location.href = '/#/viewUserProfile';
    }

    handleFirstNameChange(event) {
        this.setState( {firstName: event.target.value});
    }

    handleNameChange(event) {
        this.setState( {name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState( {address: event.target.value});
    }

    handleEmailChange(event) {
        this.setState( {email: event.target.value});
    }

    handleOldPasswordChange(event) {
        this.setState( {oldPassword: event.target.value});
    }

    handleNewPasswordChange(event) {
        this.setState( {newPassword: event.target.value});
    }

    handleNewPasswordDoubleChange(event) {
        this.setState( {newPasswordDouble: event.target.value});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div>
                        <img src="src/images/profile-icon.png" width="100px"/>
                    </div>
                    <div>
                        <form role='form' action={this.state.url} onSubmit={this.handleSubmit}>
                            <div style={styles.box}>
                                <label>Vorname: </label><TextField hintText="Vorname" value={this.state.firstName} onChange={this.handleFirstNameChange} style={styles.field} />
                                <label>Nachname: </label><TextField hintText="Nachname" value={this.state.name} onChange={this.handleNameChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <label>Adresse: </label><TextField hintText="Adresse" value={this.state.address} onChange={this.handleAddressChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <label>E-Mail: </label><TextField hintText="E-Mail" value={this.state.email} onChange={this.handleEmailChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <label>Altes Passwort: </label><TextField type="password" hintText="altes Passwort" onChange={this.handleOldPasswordChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <label>Neues Passwort: </label><TextField type="password" hintText="neues Passwort" onChange={this.handleNewPasswordChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <label>Neues Passwort wiederholen: </label><TextField type="password" hintText="neues Passwort wiederholen" onChange={this.handleNewPasswordDoubleChange} style={styles.field} />
                            </div>
                            <div style={styles.box}>
                                <RaisedButton label="Abbrechen"  containerElement={<Link to="/viewUserProfile" />}
                                              linkButton={true} primary={true} style={styles.button} />
                                <RaisedButton label="Speichern"  type="submit" primary={true} style={styles.button} />
                        </div>
                        </form>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}