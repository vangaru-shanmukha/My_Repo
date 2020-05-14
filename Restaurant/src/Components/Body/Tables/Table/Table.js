import React, { Component } from 'react';

import { connect } from 'react-redux';

class Table extends Component {

    allowDrop = (event) => {
        event.preventDefault();
    }

    drop = (event) => {
        event.preventDefault();
        var tableId = event.target.id;
        var menuId = event.dataTransfer.getData("menu");
        const tables = [];
        this.props.tables.map(table => (
            tables.push(Object.assign({}, table))
        ));
        const items = [];
        this.props.tables.map(table => (
            items.push(Object.assign({}, table.items))
        ))
        for (var i = 0; i < tables.length; i++) {
            tables[i].items = items[i];
        }
        if (tableId) {
            tables[tableId].cost += this.props.menus[menuId].cost;
            if(tables[tableId].items[this.props.menus[menuId].name] === undefined) {
                tables[tableId].items[this.props.menus[menuId].name] = 1;
            }
            else {
                tables[tableId].items[this.props.menus[menuId].name] += 1;
            }
            tables[tableId].totalItems += 1;
            this.props.addItemHandler(tables);
        }
        else {
            alert("Please drag properly");
        }

    }

    render() {
        if (this.props.table.show) {
            return (
                <li id={this.props.table.id} onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} onClick={() => this.props.clicked(this.props.table.id)}>
                    <div>
                        <h3>{this.props.table.name}</h3>
                        Rs.<span>{this.props.table.cost}</span>| Total items: <span>{this.props.table.totalItems}</span>
                    </div>
                </li>
            );
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
        menus: state.menus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemHandler: (tables) => dispatch({
            type: "ADD_ITEM",
            tables: tables
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);