import React from "react";
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
export default function ContactSocial() {

  return <Card.Body>
    <a href="https://www.linkedin.com/in/nathan-pecchia/" target="_blank">
    <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/SeptumPrince" target="_blank">
    <FontAwesomeIcon icon={faGithubSquare} />
    </a>
    <a href="https://www.instagram.com/nathanrobertpecchia/" target="_blank">
    <FontAwesomeIcon icon={faInstagram} />
    </a>

  </Card.Body>
}