import React from "react";

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
    </div>
  );
}

export default Card;
