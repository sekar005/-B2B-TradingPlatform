/**
 * Created by pfeiffer on 21.12.2016.
 */
import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ViewRating extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <h4>Bewertungstitel</h4>
                        <img src="src/images/star_black.png" />
                        <img src="src/images/star_black.png" />
                        <img src="src/images/star_half_black.png" />
                        <img src="src/images/star_border_black.png" />
                        <img src="src/images/star_border_black.png" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </p>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}