import React, {Component} from "react";

export default class InputText extends Component {

    checkInput = (event) => {
        const {min, max} = this.props;

        if (event.target.value.length < min){
            alert(`Вы ввели меньше чем ${min} символов`)
        }
        if (event.target.value.length > max){
            alert(`Вы ввели больше чем ${max} символов`)
        }
    }

    render() {
        return(
            <input type="text" onBlur={this.checkInput}/>
        )
    }
}