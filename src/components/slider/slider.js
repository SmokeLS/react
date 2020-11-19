import React, {Component} from "react";

import "./slider.scss";

export default class Slider extends Component {

    render() {

        const {imgs} = this.props;

        const list = imgs.map((img) => {
            return(
                <div className="item-img">
                    <img className="img-slider" src={img} alt="#"/>
                </div>
            );
        });
        
        return (
            <div className="slider">
                <button>Prev</button>
                {list}
                <button>Next</button>
            </div>
        )
    }
}