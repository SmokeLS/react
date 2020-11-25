import React, {Component} from "react";

import "./pagination.scss";

export default class Pagination extends Component {

    state = {
        chosenButton: 1
    }

    checkButton = (event = "") => {
                
        const prevActive = document.querySelector(".active-button");

        if (prevActive && event){
            prevActive.classList.remove("active-button");
            event.target.closest("li").classList.add("active-button");
        }
        if (event) { 
            event.target.closest("li").classList.add("active-button");
        }

        if (prevActive) {
            prevActive.classList.remove("active-button");
        }
    }

    selectPrevButton = () => {
        this.checkButton();

        this.setState((state) => {
            document.querySelector(`[data-number="${this.state.chosenButton-1}"]`).classList.add("active-button");
            return {chosenButton: state.chosenButton - 1}
        });
    }

    selectNextButton = () => {
        this.checkButton();
        
        this.setState((state) => {
            document.querySelector(`[data-number="${this.state.chosenButton+1}"]`).classList.add("active-button");
            return {chosenButton: state.chosenButton + 1}
        });
    }

    chooseButton = (event) => {
        this.checkButton(event);

        this.setState({
            chosenButton: +event.target.closest("li").dataset.number
        });

    }

    render(){
        const {countArticles, limit} = this.props;
        let prevButton = "", nextButton = "", temp = "";

        if (this.state.chosenButton != 1){
            prevButton = <li className="page-item" key="1" onClick={this.selectPrevButton}>
                                    <a className="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
        }

        if (this.state.chosenButton != Math.ceil(countArticles/limit)){
            nextButton = <li className="page-item" key={Math.ceil(countArticles/limit)} onClick={this.selectNextButton}>
                                    <a className="page-link" href="#">
                                      Next
                                    </a>
                                </li>
        }


        const newList = [];
        for (let i = 0; i < Math.ceil(countArticles/limit); i++) {
            (i == 0) ? temp = "active-button": temp="";
            newList.push(<li className={`page-item ${temp}`} key = {i+1} onClick={this.chooseButton} data-number={i+1}>
                        <a className="page-link" href="#">{i+1}</a>
                        </li>);
        }

        return(
            <ul className="pagination">
                {prevButton}
                {newList}
                {nextButton}
            </ul>

        )
    }
}

