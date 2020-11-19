import React, {Component} from "react";

import "./menu.scss";

export default class Slider extends Component {

    state = {
        hidden: true
    }

    toggleMenu = () => {

        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        let caretClass = "fa fa-caret-down";
        const list = [];
        const {hidden} = this.state; 

        if (!hidden){
            caretClass = "fa fa-caret-right";
            for (let i = 0; i < this.props.textButtons.length; i++) {
                list.push(<li className="menu-item"><a className="menu-hyper">{this.props.textButtons[i]}</a></li>);
            }
        }

        return(
            <div className="menu">
                <button className="menu-button" onClick={this.toggleMenu}>
                    {this.props.title}
                   <i class={caretClass}></i>
                </button>
                <ul className="menu-list" hidden={(hidden)? hidden: ""}>
                    {list}
                </ul>
            </div>
        );
    }
}