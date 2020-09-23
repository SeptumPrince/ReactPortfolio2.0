import React from "react";

import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Hero from "../components/Hero";
import Axios from "axios";
import ContactInfo from "../components/ContactPage/ContactInfo"
import ContactSocial from "../components/ContactPage/ContactSocial"
// import ContactForm from "../components/ContactPage/ContactForm"

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };


  state={
    collapseID: "collapse3"
  }
  
  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  render() {
    return (
      <div className="page">
        <Hero title={this.props.title} />
        <ContactInfo />
      <Accordion>
        <Card style={{ backgroundColor: '#FEB20A', border: "none"  }}>
       
            <Accordion.Toggle as={Button} variant="h5" eventKey="1" style={{paddingLeft: 0}}>
            <Card.Title variant="h4" style={{paddingLeft: 20, textAlign: "left"}}>
              <b>Social</b>
              </Card.Title>
            </Accordion.Toggle>
        
        <Accordion.Collapse eventKey="1">
          <ContactSocial />
        </Accordion.Collapse>
      </Card>
      {/* <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Contact Form
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body><ContactForm /></Card.Body>
        </Accordion.Collapse>
      </Card> */}
</Accordion>


      </div>
    );
  }
}

export default ContactPage;
