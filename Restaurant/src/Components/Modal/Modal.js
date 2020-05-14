import React, { Component } from 'react';

import { connect } from 'react-redux';

import GenerateBill from './generateBill';

import classes from './Modal.module.css';

class Modal extends Component {

    getMenuItem = (itemName) => {
        return this.props.menus.filter(menu => menu.name.includes(itemName));
    }

    render() {
        let items = Object.keys(this.props.tables[this.props.currentTable].items);
        let body = null;
        if (items.length > 0) {
            body = (
                items.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                        <td>
                            <input
                                type="text"
                                value={this.props.tables[this.props.currentTable].items[item]}
                                onChange={(event) => this.props.editItemHandler(event, item)} />
                        </td>
                        <td>{this.getMenuItem(item)[0].cost * this.props.tables[this.props.currentTable].items[item]}</td>
                        <td><button onClick={() => this.props.deleteItemHandler(item)}>Delete</button></td>
                    </tr>
                ))
            );
        }
        return (
            <div id="myModal" className={classes.Modal}>
                <div className={classes.ModalContent} id="myModalContent">
                    <span className={classes.close} onClick={this.props.showPopUp}>&times;</span>
                    <h2>Table - {this.props.currentTable + 1}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {body}
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>{this.props.tables[this.props.currentTable].cost}</td>
                                <td><button onClick={this.props.showBillHandler}>Generate Bill</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
        menus: state.menus,
        currentTable: state.currentTable
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        showPopUp: () => dispatch({
            type: "SHOW_MODAL",
            id: null
        }),
        editItemHandler: (event, item) => dispatch({
            type: "EDIT_ITEM",
            qty: event.target.value,
            item: item
        }),
        deleteItemHandler: (item) => dispatch({
            type: "DELETE_ITEM",
            itemName: item
        }),
        showBillHandler: () => dispatch({
            type: "SHOW_BILL"
        })
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(Modal);