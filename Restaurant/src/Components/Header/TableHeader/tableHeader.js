import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './tableHeader.module.css';

class TableHeader extends Component {

    onKeyUpHandler = (event) => {
        let filter;
        filter = event.target.value.trim().toUpperCase();
        const tables = [];
        this.props.tables.map(table => (
            tables.push(Object.assign({},table))
        ));
        if(filter !== '') {
            for(let i=0;i<tables.length;i++){
                let name = tables[i].name.trim().toUpperCase();
                if(name.includes(filter) === false) {
                    tables[i].show = false;
                }
                else {
                    tables[i].show = true;
                }
            }
            this.props.searchHandler(tables);
        }
        else {
            for(let i=0;i<tables.length;i++){
                tables[i].show = true;
            }
            this.props.searchHandler(tables);
        }
     }

    render() {
        return (
            <div className={classes.Table}>
                <h3>Tables</h3>
                <input type="text" id="searchTable" placeholder="Seach table" onKeyUp={(event) => this.onKeyUpHandler(event)}></input>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchHandler: (tables) => dispatch({
            type: "SEARCH_TABLE",
            tables: tables
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);