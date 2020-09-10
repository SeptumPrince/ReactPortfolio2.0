import React from "react";

import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import screenshot_iclassroom from "../assets/images/screenshot_iclassroom.jpg";
import screenshot_covid from "../assets/images/screenshot_covid.jpg";
// import queens from '../assets/images/evverest.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Covid-19 Project",
          subTitle:
            "As COVID-19 quarantine guidelines begin to relax and local businesses reopen, many New Yorkers are feeling comfortable enough to leave their homes. In order to keep our vulnerable neighbors safe and taken care of, our website will help residents locate the nearest Covid-19 testing sites, free meals locations, and a COVID-19 related picture to remind them of the current pandemic.",
          imgSrc: screenshot_covid,
          // git_link: "https://github.com/HexiangLiu/COVID-Project",
          // deploy_link: "https://bit.ly/NQR_app",
          // languages: ["jQuery", "API"],
          selected: false
        },
        {
          id: 1,
          title: "iClassroom",
          subTitle:
            "iClassroom is an app for teacher-supervised student interactions. Students can sign-in to their account dashboard. Here, they can upload or create documents, and they can schedule learning sessions with one another. A separate teacher dashboard contains a gradebook and access/ display of all student materials.",
          imgSrc: screenshot_iclassroom,
          //       languages: ["JavaScript", "MongoDB"],
          // git_link: "https://github.com/jamesrowe1/project2",
          // deploy_link: "https://classroomhelper.herokuapp.com/",
          selected: false
        },
        {
          id: 2,
          title: "DiaBeatThis!",
          subTitle: "Application for people with diabetes",
          // imgSrc: screenshot_queens,
          // languages: ["React.js", "Bootstrap", "API"],
          // git_link: "https://github.com/camrynnesullivan/dia-beat-this",
          // deploy_link: "https://drag-race-react.herokuapp.com/",
          selected: false
        },
        {
          id: 2,
          title: "The Queen's Table",
          subTitle:
            "This is an application made using React that allows you to view and sort the various drag queens from RuPaul's Drag Race.",
          // imgSrc: screenshot_queens,
          // languages: ["React.js", "Bootstrap", "API"],
          // git_link: "https://github.com/SeptumPrince/EmployeeReact",
          // deploy_link: "https://drag-race-react.herokuapp.com/",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
