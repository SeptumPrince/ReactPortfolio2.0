import React from "react";
import Card from 'react-bootstrap/Card'
import CardInfo from "./CardInfo";

function ProjectCard(props) {
  return (
    <div
      className="n-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="n-card-image"
        src={props.item.imgSrc}
        alt={props.item.title}
      />
      {props.item.selected && (
        <Card.Body>
          <Card.Text>
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
   )}
    </div>
  );
}

export default ProjectCard;
