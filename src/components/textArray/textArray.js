import React, {Component} from "react";
import TextPanel from "../textPanel";

export default class TextArray extends Component {

    render() {
        const {text} = this.props;
        const newTxt = text.map((item, index) => {
            
            return(
                <TextPanel text={item} index={index} />
            )
        });
         
        return (
            newTxt
        )
    }
}