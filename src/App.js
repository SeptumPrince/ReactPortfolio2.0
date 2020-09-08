import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Septum Prince",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Septum Prince Coding",
        subTitle: "Dangerously cheesey.",
        description: "Look at my projects."
      },
      about: {
        title: "About the Septum Prince"
      },
      contact: {
        title: "Contact Me"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
