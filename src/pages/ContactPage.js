import React from "react";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      disabled: false,
      emailSent: null
    };
  }
  render() {
    return <h1>ContactPage</h1>;
  }
}

export default ContactPage;
