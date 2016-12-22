/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
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
        margin: 12,
        textAlign: 'center',
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
        margin: 12,
        textAlign: 'left',
        float : 'left'
    }
};

export default class EditCompanyComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div style={styles.picture}><img src="src/images/profile-icon.png" width="100px"/><RaisedButton label="Bild ändern" style={styles.button}/></div>

                    <div style={styles.justify}>
                        <TextField
                            hintText="Firmenname"
                            floatingLabelText="Firmenname"
                        /><br/><TextField
                            hintText="Branche"
                            floatingLabelText="Branche"
                        /><br/>
                        <TextField
                            hintText="Adresse"
                            floatingLabelText="Adresse"
                        /><br/>
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                        /><br/>
                        <TextField
                            hintText="Telefon"
                            floatingLabelText="Telefon"
                        /><br/>
                        <TextField
                            hintText="Fax"
                            floatingLabelText="Fax"
                        /><br/>
                        <TextField
                            hintText="Webseite"
                            floatingLabelText="Webseite"
                        /><br/>
                        <RaisedButton style={styles.button} label="Abbrechen" containerElement={<Link to="/viewCompany" />}
                                      linkButton={true} />
                        <RaisedButton style={styles.button} label="Speichern" containerElement={<Link to="/viewCompany" />}
                                      linkButton={true} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}