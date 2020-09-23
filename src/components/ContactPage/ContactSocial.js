import React from "react";
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
export default function ContactSocial() {

  return <Card.Body className="social"> 
    <a href="https://www.linkedin.com/in/nathan-pecchia/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" className="icon" />
    </a>
    <a href="https://github.com/SeptumPrince" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithubSquare} size="4x" color="black" className="icon"/>
    </a>
    <a href="https://www.instagram.com/nathanrobertpecchia/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="4x" color="black" className="icon"/>
    </a>

  </Card.Body>
}