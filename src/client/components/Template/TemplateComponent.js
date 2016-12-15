/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

export default class TemplateComponent extends React.Component {

    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
             <div>
                 <MuiThemeProvider>
                    <Toolbar>
                        <ToolbarGroup>
                            <ToolbarTitle text="B2B" />
                            <FlatButton label="Mein Profil" containerElement={<Link to="/viewCompany" />}
                                        linkButton={true} primary={true} />
                            <FlatButton label="Firmenprofil" containerElement={<Link to="/viewCompany" />}
                                        linkButton={true} primary={true} />
                            <FlatButton label="Anzeige aufgeben" containerElement={<Link to="/viewCompany" />}
                                        linkButton={true} primary={true} />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <SelectField
                                floatingLabelText="Kategorie"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={1} primaryText="Produkte" />
                                <MenuItem value={2} primaryText="Bestellungen" />
                            </SelectField>
                            <TextField
                                hintText="Produkte"
                                floatingLabelText="Suche"
                            />
                            <Link to="/cart"><ActionShoppingCart /></Link>
                            <Link to="/login"><ActionPowerSettingsNew /></Link>
                        </ToolbarGroup>
                    </Toolbar>
                 </MuiThemeProvider>
                 {this.props.children}
                </div>


        );
    }
}