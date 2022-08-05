import React from "react";
import { Link } from "react-router-dom";
function Card({ card }) {
  return (
    <div className="Card">
      <div className="cardHead">
        <img src={card.icon_url} alt="" width={"40px"} />
        <div>
          <div>
            <h4>{card.title}</h4>
          </div>
          <div>{card.category}</div>
        </div>
      </div>
      <a href={card.link} target="_blank" rel="noopener noreferrer">
        {card.link}
      </a>
      <p>{card.description}</p>
      <Link to={`/resource/${card.id}`}>
        <button>Show More</button>
      </Link>
    </div>
  );
}

export default Card;
