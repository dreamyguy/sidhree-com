import React from "react";
import About from "../content/About/About";
import Network from "../content/Network/Network";
import Section from "../layout/Section/Section";
import Wrapper from "../layout/Wrapper/Wrapper";

const NotFoundPage = () => (
  <Wrapper>
    <Section sectionClasses="about" contentClasses="text-shadow-light">
      <About />
    </Section>
    <Section
      sectionClasses="networks bg-fav-occre-dark fg-fav-beige-light"
      contentClasses="align-center"
    >
      <Network />
    </Section>
    <Section sectionClasses="nice-to-know" contentClasses="align-center">
      <b>
        <em>Oops, didn't find that one</em>
      </b>
    </Section>
  </Wrapper>
);

export default NotFoundPage;
