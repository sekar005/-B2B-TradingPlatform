import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cookie from 'react-cookie';

const styles = {
    form: {
        margin: 20
    }
}

export default class ViewUserProfile extends React.Component{

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
                        <h1>{this.state.data.firstName} {this.state.data.name}</h1>
                        <p>Adresse: {this.state.data.address}</p>
                        <p>E-Mail: {this.state.data.email}</p>
                        <RaisedButton label="Bearbeiten" containerElement={<Link to="/editUserProfile" />}
                                      linkButton={true} primary={true} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}