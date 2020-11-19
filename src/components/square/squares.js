import React, {Component} from "react";

import "./squares.scss";

export default class Square extends Component {

    state = {
        greenColor: true
    }

    changeSquare = () => {

        this.setState({
            greenColor: !this.state.greenColor           
        });
    }
    
    render() {
        let item;
        
        if (this.state.greenColor) {
            item = <div className="green" onClick={this.changeSquare}>green</div>
        }else{
            item = <div className="red" onClick={this.changeSquare}>red</div>
        }

        return(
            <div className="squares">
                {item}
                <div className="blue">
                    blue
                </div>
            </div>
        )
    }
}