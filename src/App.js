import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SeptumIcon from "./assets/images/septum_icon.png"

const navTitles = ["Dangerously Cheesy", "Where's the Beef?", "The Breakfast of Champions", "Mmm, mmm good", "They're grrrrrrreat!",]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Septum Prince Web Development",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Septum Prince",
        subTitle: "Web Development",
        text: "Click a project to read more..."
      },
      about: {
        title: "About"
      },
      contact: {
        title: "Contact"
      }, 
    };
    this.getNavTitle = this.getNavTitle.bind(this)
  }

 

  getNavTitle(){
    return navTitles[Math.floor(Math.random() * navTitles.length)]
  }


  render() {
    return (
      <Router>
        <Container className="p-0 container" fluid={true}>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand >{this.getNavTitle()}</Navbar.Brand>

            <Navbar.Toggle className="border-0 d-flex flex-row" style={{lineHeight: '30px'}} aria-controls="navbar-toggle">
            &#60;
            <Container fluid className="d-flex flex-column">
              <Row>
          <img src={SeptumIcon} height={40} alt="SeptumIcon"/>
          </Row>
          <Row>
          <span id="menu-text">MENU</span>
          </Row>
            </Container>
            &#62;
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
