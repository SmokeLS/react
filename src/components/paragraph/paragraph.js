import React, {Component} from "react";

export default class InputText extends Component {

    state = {
        hidden: true,
        textButton: "Подробнее..."
    }
    unwrap = () => {
        let textButton = "Подробнее...";
        
        if (this.state.hidden) {
            textButton = "Скрыть";
        }

        this.setState({
            hidden: !this.state.hidden,
            textButton
        });
    }
    render() {
        const {text} = this.props;

        let txt = 0, textReturn = text;

        if(this.state.hidden){
            txt = text.indexOf(".")+1;
            textReturn = text.substring(0,txt);
        }

        return(
            <div>
                {textReturn}
                <button onClick={this.unwrap}>{this.state.textButton}</button>
            </div>
        )
    }
}