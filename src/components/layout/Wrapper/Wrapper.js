import React from "react";
import Bar from "../Bar/Bar";
import Copyright from "../../content/Copyright/Copyright";
import Section from "../Section/Section";

const Wrapper = ({ children }) => (
  <>
    <Bar top />
    {children}
    <Section sectionClasses="copyright" contentClasses="align-center">
      <Copyright />
    </Section>
    <Bar bottom />
  </>
);

export default Wrapper;
