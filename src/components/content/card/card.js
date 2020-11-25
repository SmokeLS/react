import "./card.scss";

function Card({href, text}) {
    return (
        <div className="Card" >
            <div className="img-block" >
                <img src={href} alt="#" />
            </div>
            <div className="img-text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

export default Card;