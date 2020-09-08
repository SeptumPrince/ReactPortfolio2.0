import React from "react";

import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1",
          subTitle: "SUBTITLE",
          imgSrc: "../assets/images/screenshot_covid.jpg",
          link: "",
          selected: false
        },
        {
          id: 1,
          title: "Project 2",
          subTitle: "SUBTITLE",
          imgSrc: "../assets/images/screenshot_queens.jpg",
          link: "",
          selected: false
        },
        {
          id: 2,
          title: "Project 3",
          subTitle: "SUBTITLE",
          imgSrc: "../assets/images/screenshot_iclassroom",
          link: "",
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
          onClick={(e) => this.handleCardClick(item.id, e)}
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