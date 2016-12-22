/**
 * Created by cdrescher on 21.12.2016.
 */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class PopoverMenuButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleMouseEnter = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <FlatButton
                    onMouseEnter={this.handleMouseEnter}
                    label="Bestellungen"
                    primary={true}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem
                            primaryText="Aufgegebene Bestellungen"
                            containerElement={<Link to="/outgoingOrder" />}
                            linkButton={true}
                        />
                        <MenuItem
                            primaryText="Eingegangene Bestellungen"
                            containerElement={<Link to="/incomingOrder" />}
                            linkButton={true}
                        />
                    </Menu>
                </Popover>
            </div>
        );
    }
}
