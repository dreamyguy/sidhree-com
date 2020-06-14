import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="row">
      <div className="small-12 columns align-center">
        <div className="section-image centered"></div>
        <h1 className="heading-one open-sans-bold fg-fav-occre-dark gutter-top-half no-margin-bottom">Wallace Sidhrée</h1>
        <h3 className="heading-three fg-sb-gray">Senior Frontend Developer</h3>
        <p className="gutter-bottom-half">
          Hi! I'm a web developer with strong graphic skills established in Oslo, Norway.
          I love to bend code to my will and create a relevant online experience.<br/>
          I deliver code that's version-controlled, thoroughly tested through
          solid CI routines and built through efficient automation.
        </p>
        <p>See for yourself by peeking at <a href="https://github.com/dreamyguy/sidhree-com" className="link-to-source-code">the source code for this page on GitHub</a>.<br/>You're welcome to use it!</p>
      </div>
    </div>
  );
};

export default About;
