import "./rating.scss";

function Rating({totalStars, selectedStars}) {

    const newList = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < selectedStars){
            newList.push(<i className='fa fa-star yellow' key={i}></i>);
        } else {
            newList.push(<i className='fa fa-star' key={i}></i>);
        }
    }

    return (
        <div className="rating-block">
            Rating {newList}
        </div>
    );
}

export default Rating;