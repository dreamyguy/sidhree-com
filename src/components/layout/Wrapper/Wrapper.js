import React from "react";
import Bar from "../Bar/Bar";
import Copyright from "../../content/Copyright/Copyright";
import Section from "../Section/Section";

const classesDark = "open-sans-light bg-brown-sugar text-shadow-dark fg-sb-graylight";
const classesLight = "open-sans-light bg-fav-beige-light fg-fav-occre-light";

const Wrapper = ({ children, isMusic }) => (
  <div className={`wrapper${isMusic ? ` music ${classesDark}` : ` ${classesLight}`}`}>
    {!isMusic && <Bar top />}
    {children}
    <Section sectionClasses="copyright" contentClasses="align-center">
      <Copyright isMusic={isMusic} />
    </Section>
    {!isMusic && <Bar bottom />}
  </div>
);

export default Wrapper;
