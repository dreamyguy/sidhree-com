import React from "react";
import DevAbout from "./DevAbout";
import DevNetwork from "./DevNetwork";
import DevNiceToKnow from "./DevNiceToKnow";
import Section from "../../layout/Section/Section";

const Dev = () => (
  <>
    <Section sectionClasses="about" contentClasses="text-shadow-light">
      <DevAbout />
    </Section>
    <Section
      sectionClasses="networks bg-fav-occre-dark fg-fav-beige-light"
      contentClasses="align-center"
    >
      <DevNetwork />
    </Section>
    <Section sectionClasses="nice-to-know">
      <DevNiceToKnow />
    </Section>
  </>
);

export default Dev;
