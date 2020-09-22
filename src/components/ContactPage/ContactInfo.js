import React from "react";
import Card from 'react-bootstrap/Card'

export default function ContactInfo() {

  return (
    <Card style={{ backgroundColor: '#FEB20A', border: "none" }}>
        <Card.Title variant="h4" style={{paddingLeft: 20}}>
            Email: <a href="mailto:nathan@septumprince.com">nathan@septumprince.com</a>
        </Card.Title>
    </Card>
    )
}