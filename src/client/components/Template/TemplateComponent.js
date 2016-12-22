/**
 * Created by Sebastian Karrie on 08.12.2016.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionPageView from 'material-ui/svg-icons/action/pageview';
import PopoverMenuButton from './PopoverMenuButton';

const styles = {
    adArea: {
        textAlign: 'right',
        float : 'right'
    }
};

var AdvertisementArea = require('../Advertisement/AdvertisementArea/AdvertisementAreaComponent').default;

export default class TemplateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }


    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
             <div>
                 <MuiThemeProvider>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <ToolbarTitle text="B2B" />
                            <FlatButton label="Mein Profil" containerElement={<Link to="/viewUserProfile" />}
                                        linkButton={true} primary={true} />
                            <FlatButton label="Firmenprofil" containerElement={<Link to="/viewCompany" />}
                                        linkButton={true} primary={true} />
                            <FlatButton label="Anzeige aufgeben" containerElement={<Link to="/addAdvertisement" />}
                                        linkButton={true} primary={true} />
                            <FlatButton label="Meine Angebote" containerElement={<Link to="/offers" />}
                                        linkButton={true} primary={true} />
                            <PopoverMenuButton/>
                        </ToolbarGroup>
                        <ToolbarGroup lastChild={true}>
                            <TextField
                                hintText="Produkte"
                                floatingLabelText="Suche"
                            />
                            <Link to="/productSearch"><ActionSearch /></Link>
                            <Link to="/companySearch"><ActionPageView/></Link>
                            <Link to="/cart"><ActionShoppingCart /></Link>
                            <Link to="/login"><ActionPowerSettingsNew /></Link>
                        </ToolbarGroup>
                    </Toolbar>
                 </MuiThemeProvider>
                 <div style={styles.adArea}> <AdvertisementArea/></div>
                 {this.props.children}
                </div>


        );
    }
}