import React from "react";
import DevAbout from "../content/Dev/DevAbout";
import DevNetwork from "../content/Dev/DevNetwork";
import Section from "../layout/Section/Section";
import Wrapper from "../layout/Wrapper/Wrapper";

const NotFoundPage = () => (
  <Wrapper>
    <Section sectionClasses="about" contentClasses="text-shadow-light">
      <DevAbout />
    </Section>
    <Section
      sectionClasses="networks bg-fav-occre-dark fg-fav-beige-light"
      contentClasses="align-center"
    >
      <DevNetwork />
    </Section>
    <Section sectionClasses="nice-to-know" contentClasses="align-center">
      <b>
        <em>Oops, didn't find that one</em>
      </b>
    </Section>
  </Wrapper>
);

export default NotFoundPage;
