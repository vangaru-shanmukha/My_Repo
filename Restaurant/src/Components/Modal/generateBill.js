import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './Modal.module.css';

class GenerateBill extends Component {

    render() {
        return (
            <div id="myModal" className={classes.Modal}>
                <div className={classes.ModalContent} id="myModalContent">
                    <span className={classes.close} onClick={this.props.generateBillHandler}>&times;</span>
                    <table>
                        <tbody>
                            <tr>
                                <th>Bill Amount</th>
                                <td>{this.props.tables[this.props.currentTable].cost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
        currentTable: state.currentTable
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        generateBillHandler: () => dispatch({
            type: "GENERATE_BILL"
        })
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(GenerateBill);