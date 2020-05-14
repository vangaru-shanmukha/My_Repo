import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './dishHeader.module.css';

class DishHeader extends Component {

    onKeyUpHandler = (event) => {
        var filter;
        filter = event.target.value.trim().toUpperCase();
        const menus = [];
        this.props.menus.map(menu => (
            menus.push(Object.assign({}, menu))
        ));
        if (filter !== '') {
            for (let i = 0; i < menus.length; i++) {
                let courseType = menus[i].courseType.trim().toUpperCase();
                let name = menus[i].name.trim().toUpperCase();
                if (name.includes(filter) === false &&
                    courseType.includes(filter) === false) {
                    menus[i].show = false;
                }
                else {
                    menus[i].show = true;
                }
            }
            this.props.searchHandler(menus);
        }
        else {
            for (let i = 0; i < menus.length; i++) {
                menus[i].show = true;
            }
            this.props.searchHandler(menus);
        }
    }

    render() {
        return (
            <div className={classes.Dish}>
                <h3>Menu</h3>
                <input type="text" id="searchMenu" placeholder="Seach menu... by course.. by food" onKeyUp={(event) => this.onKeyUpHandler(event)}></input>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchHandler: (menus) => dispatch({
            type: "SEARCH_MENU",
            menus: menus
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishHeader);