import React, {Component} from "react";

import './scrollBar.scss';

export default class ScrollBar extends Component {

    componentDidMount() {
        const filled = document.querySelector(".scroll-filled");

        if (this.props.leng > 100){
            filled.style.width = '100%';
        } else {
            filled.style.width = `${this.props.length}%`;
        }

        console.log(filled);
    }

    render() {

        return (
            <div className="scroll">
                <div className="scroll-filled" onLoad={this.scrollFill}>

                </div>      
            </div>
        )
    }
}