import React, {Component} from "react";

import "./errorMessage.scss";

export default class ErrorMessage extends Component {

    state = {
        time: "",
        countSecond: 0,
        countThird: 0,
        countFourth: 0
    }

    setCountSecond = () => {
        this.setState({
            countSecond: this.state.countSecond + 1
        });
    }

    setCountThirdPlus = () => {
        this.setState({
            countThird: this.state.countThird + 1
        });
    }

    setCountThirdMinus = () => {
        this.setState({
            countThird: this.state.countThird - 1
        });
    }
    
    setCountFourthFirst = () => {
        this.setState({
            countFourth: this.state.countFourth + 1
        });
    }

    setCountFourthFifth = () => {
        this.setState({
            countFourth: this.state.countFourth + 5
        });
    }
    setCountFourthTenth = () => {
        this.setState({
            countFourth: this.state.countFourth + 10
        });
    }

    setCountFourthMultiply = () => {
        this.setState({
            countFourth: this.state.countFourth * this.state.countFourth
        });
    }
    componentDidMount() {
        const time = new Date().toString();

        this.setState({
            time
        });
    }

    render() {

        return (
            <div>
                <h1>Whitelabel Error Page</h1>
                <p>This application has no explicit mapping for /error, so you are seeing this as a fallback.</p>

                <div>{this.state.time}</div>

                <div>There was an unexpected error (type=Not Found, status=404).</div>
                <div> No message available</div>

                <div>{this.state.countSecond}</div>
                {(this.state.countSecond < 10) ? <p>count меньше 10</p> : <p>count больше 10</p>}

                <button onClick={this.setCountSecond}>click me</button>

                
                <div className="calc">
                    <span className="calc-sign" onClick={this.setCountThirdMinus}>-</span>
                    <span className="calc-main">{this.state.countThird}</span>
                    <span className="calc-sign"onClick={this.setCountThirdPlus}>+</span>
                </div>


                <div>
                    <button onClick={this.setCountFourthFirst}>first</button>
                    <button onClick={this.setCountFourthFifth}>Fifth</button>
                    <button onClick={this.setCountFourthTenth}>Tenth</button>
                    <button onClick={this.setCountFourthMultiply}>Multiply</button>
                    <span>{this.state.countFourth}</span>
                </div>

            </div>
        )
    }
}