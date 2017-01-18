import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class OrderDetails extends React.Component {
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
        const actions = [
            <RaisedButton
                label="OK"
                primary={true}
                onMouseDown={this.handleClose}
            />
        ];

        return (
            <div>
                <RaisedButton label={this.props.orderNo} onMouseDown={this.handleOpen} />
                <Dialog
                    title="Bestelldetails ID: 123456"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <p>Produkt:         Produkt1</p>
                    <p>Firma:          <Link to="/viewCompany">Mustermann</Link></p>
                    <p>Anzahl:          5</p>
                    <p>Preis gesamt:    200€</p>
                    <p>Status:          in Arbeit</p>
                </Dialog>
            </div>
        );
    }
}