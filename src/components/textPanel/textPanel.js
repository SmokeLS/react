import React, {Component} from "react";

import './textPanel.scss';

export default class TextPanel extends Component {

    togglePanel = (event) => {
        
        const hide = event.target.parentNode.querySelector(".accordion-collapse").classList.contains("hide");
        const show = event.target.parentNode.querySelector(".accordion-collapse").classList.contains("show");

        if(!hide&&!show) {
            event.target.parentNode.querySelector(".accordion-collapse").classList.remove("hide-first");
            event.target.parentNode.querySelector(".accordion-collapse").classList.add("show");
        } else {
            event.target.parentNode.querySelector(".accordion-collapse").classList.toggle("hide");
            event.target.parentNode.querySelector(".accordion-collapse").classList.toggle("show");    
        }
    }

    render() {
        return(
            <div className="accordion" >
                <div className="accordion-panel" onClick={this.togglePanel}>Панель {`${this.props.index+1}`}</div>
                <div className="accordion-collapse hide-first"><p className="accordion-text">{this.props.text}</p></div>
            </div>
        )
    }
}