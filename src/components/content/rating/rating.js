import React, {Component} from 'react';

import "./rating.scss";

export default class Rating extends Component{

    chooseStars = (total) => {
        const yellows = document.querySelectorAll(".fa-star.yellow");
        const blacks = document.querySelectorAll(".fa-star");

        yellows.forEach((item) => {
            item.classList.remove("yellow");
        });

        for (let i = 0; i < total; i++) {
            blacks[i].classList.add("yellow");
        }
    }

    render() {

        const {totalStars, selectedStars} = this.props;
        const newList = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < selectedStars){
                newList.push(<i className='fa fa-star yellow' key={i} onClick={() => {this.chooseStars(i+1)}}></i>);
            } else {
                newList.push(<i className='fa fa-star' key={i} onClick={() => {this.chooseStars(i+1)}}></i>);
            }
        }

        return (
            <div className="rating-block">
                Rating {newList}
            </div>
        );
    }
}
