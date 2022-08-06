import React from "react";
import { Link } from "react-router-dom";
function Card({ card }) {
  return (
    <div className="Card">
      <div className="cardHead">
        <div
          className="cardimage"
          style={{ backgroundImage: `url(${card.icon_url})` }}
        ></div>
        <div>
          <div>
            <div className="cardtitle">{card.title}</div>
          </div>
          <div className="cardcategory">{card.category}</div>
        </div>
      </div>
      <div className="cardbottomhalf">
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          {card.link}
        </a>
        <div className="carddescription">{card.description}</div>
        <Link to={`/resource/${card.id}`}>
          <button className="cardbtn">Show More</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
