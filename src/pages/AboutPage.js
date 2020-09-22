import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div className="page">
      <Hero title={props.title} />

      <Content>
      <p>Web developer from an NYC performing artist's background. </p>
      <p> Full-stack skills include a specialty in React.js and a certificate through Columbia University. </p>
      <p>Having worked simultaneous odd jobs for several years, I’m experienced in balancing (and seamlessly switching between) skill sets and professional personas. </p>
      <p>Recent projects include an app to help New Yorkers find COVID-19 testing/charity resources and a blood sugar tracking app for patients with Type 2 Diabetes. </p>
      <p>Considering current events, I'm motivated to sharpen my skills and work for a company that is doing important work that contributes to the betterment of our communities - particularly <b>food insecurity, climate change and social justice.</b> </p>
      </Content>
    </div>
  );
}

export default AboutPage;
