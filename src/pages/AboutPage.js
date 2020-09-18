import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div className="page">
      <Hero title={props.title} />

      <Content>
        <p>LOREM.</p>

        <p>LOREM.</p>

        <p>LOREMS</p>

        <p>LOREM</p>
      </Content>
    </div>
  );
}

export default AboutPage;
