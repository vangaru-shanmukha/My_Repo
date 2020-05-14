import React, { Component } from 'react';

import { connect } from 'react-redux';

import Menu from './Menu/Menu';

import classes from './Menus.module.css';

class Menus extends Component {
    render() {
        return (
            <div className={classes.Menus}>
                <ul className={classes.MenusContent}>
                    {this.props.menus.map((menu,index) => (
                        <Menu key={index} menu={menu} index={index}/>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};

export default connect(mapStateToProps)(Menus);