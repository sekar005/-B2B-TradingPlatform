import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ViewUserProfile extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <img src="src/images/profile-icon.png" width="100px"/>
                    </div>
                    <div>
                        <h1>Max Mustermann</h1>
                        <p>Musterstraße 1, 44444 Musterhausen</p>
                        <p>mail@mail.com</p>
                        <RaisedButton label="Bearbeiten"/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}