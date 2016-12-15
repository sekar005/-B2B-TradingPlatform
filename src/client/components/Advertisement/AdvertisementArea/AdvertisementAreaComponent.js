/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 350,
        height: 800,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'src/images/ExampleImage.png',
        title: 'Anzeige 1',
        detailLink: '/adDetails',
    },
    {
        img: 'src/images/ExampleImage.png',
        title: 'Anzeige 2',
        detailLink: '/adDetails',
    },
    {
        img: 'src/images/ExampleImage.png',
        title: 'Anzeige 3',
        detailLink: '/adDetails',
    },
    {
        img: 'src/images/ExampleImage.png',
        title: 'Anzeige 4',
        detailLink: '/adDetails',
    },
];

export default class AddAdvertisementComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.root}>
                    <GridList
                        cellHeight={100}
                        style={styles.gridList}
                    >
                        <Subheader>Anzeigen</Subheader>
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.title}
                                title={<Link to={tile.detailLink}>{tile.title}</Link>}
                                titleBackground={'rgba(0, 0, 0, 0.1)'}
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </MuiThemeProvider>
        );
    }
}