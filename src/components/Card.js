import React from "react";

function Card(props) {
  return (
    <div>
      <img className="" src={props.item.imgSrc} alt={props.item.title} />
    </div>
  );
}

export default Card;
