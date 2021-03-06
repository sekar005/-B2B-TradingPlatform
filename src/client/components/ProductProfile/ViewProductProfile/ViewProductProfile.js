import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ViewRating from './../ViewRating/ViewRating';

export default class ViewProductProfile extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h2>Produkt 1</h2>
                    <img src="src/images/ExampleImage.png" />
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </p>
                    <p>Preis: 18.99€</p>
                    <hr />

                    <ViewRating />
                    <ViewRating />
                </div>
            </MuiThemeProvider>
        );
    }
}