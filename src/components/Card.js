import React from "react";

import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div>
      <img
        className="n-inline-block n-card"
        src={props.item.imgSrc}
        alt={props.item.title}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.linki}
        />
      )}
    </div>
  );
}

export default Card;
