/**
 * Created by pfeiffer on 21.12.2016.
 */
import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog'

export default class AddRating extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const
            actions = [
                <FlatButton
                    label="Abbrechen"
                    primary={true}
                />,
                <FlatButton
                    label="Hinzufügen"
                    primary={true}
                    keyboardFocused={true}
                />,
            ];

        return (
        <MuiThemeProvider>
            <div>
            <RaisedButton label="Abbrechen" onMouseDown={this.handleOpen} />
            <Dialog
                title="Bewertung erstellen"
                actions={actions}
                modal={false}
                open={this.state.open}>
                <div>
                    <label>Bewertung</label><input type="text" />
                </div>
            </Dialog>
            </div>
        </MuiThemeProvider>

        );
    }
}