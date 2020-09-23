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
          <Card.Link href={props.item.deploy_link} target="_blank">Deployed</Card.Link>
          <Card.Link href={props.item.git_link} target="_blank">Repo</Card.Link>
        </Card.Body>
   )}
    </div>
  );
}

export default ProjectCard;
