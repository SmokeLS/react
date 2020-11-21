import React, { Component } from "react";


export default class Input extends Component {

    state = {
        value: ""
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    onChangeInput = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render(){

        const {type, placeholder} = this.props;

        return (
            <input type={type}
                   onChange={this.onChangeInput}
                   placeholder={placeholder}
                   />
        );
        
    }
}
