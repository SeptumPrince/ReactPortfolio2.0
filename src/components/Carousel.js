import React from "react";

import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import screenshot_queens from "../assets/images/queens.jpg";
import screenshot_diabeatthis from "../assets/images/diabeatthis.jpg";
import screenshot_covid from "../assets/images/covid.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "DiaBeatThis!",
          subTitle: "Application for people with diabetes",
          imgSrc: screenshot_diabeatthis,
          // languages: ["React.js", "Bootstrap", "API"],
          git_link: "https://github.com/camrynnesullivan/dia-beat-this",
          deploy_link: "https://drag-race-react.herokuapp.com/",
          selected: false
        },
        {
          id: 1,
          title: "The Queen's Table",
          subTitle:
            "This is an application made using React that allows you to view and sort the various drag queens from RuPaul's Drag Race.",
          imgSrc: screenshot_queens,
          // languages: ["React.js", "Bootstrap", "API"],
          git_link: "https://github.com/SeptumPrince/EmployeeReact",
          deploy_link: "https://drag-race-react.herokuapp.com/",
          selected: false
        },
        {
          id: 2,
          title: "Covid-19 Project",
          subTitle:
            "As COVID-19 quarantine guidelines begin to relax and local businesses reopen, many New Yorkers are feeling comfortable enough to leave their homes. In order to keep our vulnerable neighbors safe and taken care of, our website will help residents locate the nearest Covid-19 testing sites, free meals locations, and a COVID-19 related picture to remind them of the current pandemic.",
          imgSrc: screenshot_covid,
          git_link: "https://github.com/HexiangLiu/COVID-Project",
          deploy_link: "https://bit.ly/NQR_app",
          // languages: ["jQuery", "API"],
          selected: false
        },
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
        <ProjectCard
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
