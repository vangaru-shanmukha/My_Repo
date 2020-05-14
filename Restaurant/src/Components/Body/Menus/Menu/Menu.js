import React, { Component } from 'react';

class Menu extends Component {

    drag = (event) => {
        event.dataTransfer.setData("menu", event.target.id);
    };

    render() {
        if (this.props.menu.show) {
            return (
                <li id={this.props.index} draggable="true" onDragStart={(event) => this.drag(event)}>
                    <div>
                        <h3 hidden>{this.props.menu.courseType}</h3>
                        <h4>{this.props.menu.name}</h4>
                            Rs.<span>{this.props.menu.cost}</span>
                    </div>
                </li>
            );
        }
        else {
            return null;
        }
    }
}

export default Menu;