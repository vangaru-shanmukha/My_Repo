import React, { Component } from 'react';

import { connect } from 'react-redux';

import Table from './Table/Table';
import Modal from '../../Modal/Modal';
import GenerateBill from '../../Modal/generateBill';

import classes from './Tables.module.css';

class Tables extends Component {

    render() {
        let modal = null;
        if(this.props.showModal) {
            modal = (
                <Modal />
            );
        }
        if(this.props.showBillPopUp) {
            modal = (
                <GenerateBill />
            );
        }
        return(
            <React.Fragment>
                <div className={classes.Tables}>
                    <ul id={classes.TablesContent}>
                    {this.props.tables.map(table => (
                            <Table key={table.id} table={table} clicked={this.props.showPopUp} />
                        ))}
                    </ul>
                </div>
                {modal}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
        menus: state.menus,
        showModal: state.showModal,
        showBillPopUp: state.showBillPopUp
    }
};

const mapDisptachToProps = (dispatch) => {
    return {
        showPopUp: (id) => dispatch({
            type: "SHOW_MODAL",
            id: id
        })
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Tables);