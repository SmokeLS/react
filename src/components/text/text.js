import React, {Component} from "react";

export default class Text extends Component{

    state = {
        visibility: false,
        textButton: "Показать",
        textDiv: ""
    }

    changeText = () => {
        let textButton = "Показать", textDiv = "";
        
        if (!this.state.visibility){
            textButton = "Скрыть";
            textDiv = "Whitelabel Error Page This application has no explicit mapping for /error, so you are seeing this as a fallback. Wed Nov 18 2020 10:15:04 GMT+0300 (Москва, стандартное время) There was an unexpected error (type=Not Found, status=404). No message available"
        }
        
        this.setState({
            visibility: !this.state.visibility,
            textButton,
            textDiv
        });
    }

    render(){
        const {textButton, textDiv} = this.state;

        return (
            <div>
                <div>{textDiv}</div>
                <button onClick={this.changeText}>{textButton}</button>
            </div>
        )
    }
}