import React from 'react';
import About from '../components/About/About';
import Bar from './../components/Bar/Bar';
import Copyright from '../components/Copyright/Copyright';
import Network from '../components/Network/Network';
import NiceToKnow from '../components/NiceToKnow/NiceToKnow';
import Section from '../components/Section/Section';
import './App.scss';

const App = () => {
  return (
    <>
      <Bar top />
      <Section sectionClasses="about" contentClasses="text-shadow-light">
        <About />
      </Section>
      <Section sectionClasses="networks bg-fav-occre-dark fg-fav-beige-light" contentClasses="align-center">
        <Network />
      </Section>
      <Section sectionClasses="nice-to-know">
        <NiceToKnow />
      </Section>
      <Section sectionClasses="copyright" contentClasses="align-center">
        <Copyright />
      </Section>
      <Bar bottom />
    </>
  );
};

export default App;
