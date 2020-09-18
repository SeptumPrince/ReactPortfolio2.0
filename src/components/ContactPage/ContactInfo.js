import React from "react";
import Card from 'react-bootstrap/Card'

export default function ContactInfo() {

  return (
    <Card>
        <Card.Body>
            <h5>Email: </h5><a href="mailto:nathan@septumprince.com">nathan@septumprince.com</a>
        </Card.Body>
    </Card>
    )
}