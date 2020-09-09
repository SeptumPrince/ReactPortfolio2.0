import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opcity: 0 } });

  return (
    <animated.div className="n-card-info" style={style}>
      <p className="n-card-title">{props.title}</p>
      <p className="n-card-subT itle">{props.subTitle}</p>
      <a href={props.link} target="_blank">
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
