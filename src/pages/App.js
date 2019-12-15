import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div>
      <ul className="bar">
        <li className="bar-item bg-fav-orange-light"></li>
        <li className="bar-item bg-fav-orange-middle"></li>
        <li className="bar-item bg-fav-orange-dark"></li>
        <li className="bar-item bg-fav-pink-shock"></li>
        <li className="bar-item bg-fav-purple-light"></li>
        <li className="bar-item bg-fav-purple-middle"></li>
        <li className="bar-item bg-fav-purple-dark"></li>
        <li className="bar-item bg-fav-green-light"></li>
        <li className="bar-item bg-fav-green-dark"></li>
        <li className="bar-item bg-fav-occre-light"></li>
      </ul>
      <section className="about">
        <div className="content text-shadow-light">
          <div className="row">
            <div className="small-12 columns align-center">
              <div className="section-image centered"></div>
              <h1 className="heading-one open-sans-bold fg-fav-occre-dark gutter-top-half no-margin-bottom">Wallace Sidhrée</h1>
              <h3 className="heading-three fg-sb-gray">Frontend Developer</h3>
              <p className="gutter-bottom-half">
                Hi! I'm a web developer with strong graphic skills established in Oslo, Norway.
                I love to bend code to my will and create a relevant online experience.<br/>
                I deliver code that's version-controlled, thoroughly tested through
                solid CI routines and built through efficient automation.
              </p>
              <p>See for yourself by peeking at <a href="https://github.com/dreamyguy/sidhree-com" className="link-to-source-code">the source code for this page on GitHub</a>.<br/>You're welcome to use it!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="networks bg-fav-occre-dark fg-fav-beige-light">
        <div className="content align-center">
          <ul className="network-list centered">
            <li><a href="https://github.com/dreamyguy/" title="GitHub" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-github"></i></a></li>
            <li><a href="https://twitter.com/dreamyguy" title="Twitter" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/dreamyguy" title="LinkedIn" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-linkedin-square"></i></a></li>
            <li><a href="http://stackoverflow.com/users/909777/wallace-sidhr%C3%A9e" title="Stack Overflow" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-stack-overflow"></i></a></li>
          </ul>
        </div>
      </section>
      <section className="nice-to-know">
        <div className="content">
          <div className="row">
            <div className="small-12 columns">
              <div>
                <div className="row">
                  <div className="small-12 medium-2 columns align-center"><i className="icon icon-4x icon-fa-code-fork"></i></div>
                  <div className="small-12 medium-10 columns">
                    <h3 className="heading-three">Tools I use</h3>
                    <p className="gutter-bottom"><a href="https://git-scm.com/">Git</a> for version control. <a href="http://gulpjs.com/">Gulp</a> and <a href="https://nodejs.org/en/">Nodejs</a> for automating the concatenation, linting, minification, testing and the creation of the production-ready build. <a href="http://www.seleniumhq.org/">Selenium</a> combined with <a href="http://nightwatchjs.org/">Nightwatchjs</a> for testing CI, <a href="https://mochajs.org/">Mocha</a> &amp; <a href="http://chaijs.com/">Chai</a> (or <a href="http://jasmine.github.io/">Jasmine</a>) for <span className="monospace">js</span> unit tests.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="small-12 medium-2 columns align-center"><i className="icon icon-4x icon-fa-cogs"></i></div>
                  <div className="small-12 medium-10 columns">
                    <h3 className="heading-three">Workflow</h3>
                    <p className="gutter-bottom">I organise my tasks with the help of the <em className="open-sans-light-italic">KANBAN</em> workflow. This process helps one visualise progress and prioritise what gets done first. I use <a href="https://trello.com/">Trello</a> privately and <a href="https://www.atlassian.com/software/jira">JIRA</a> at the office. I've worked with <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a>, <a href="https://en.wikipedia.org/wiki/Kanban_(development)">KANBAN</a> and <a href="https://en.wikipedia.org/wiki/Scrum_(software_development)">SCRUM</a> software development methodologies, and believe all have their merits and gotchas. I find that a looser <em className="open-sans-light-italic">"SCRUM - the best parts"</em> approach is the one that worked out best so far, when predictability and estimates are key.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="small-12 medium-2 columns align-center"><i className="icon icon-4x icon-fa-flask"></i></div>
                  <div className="small-12 medium-10 columns">
                    <h3 className="heading-three">Open-source projects</h3>
                    <p className="gutter-bottom">I have a few open-source projects on GitHub. All of them are <em className="open-sans-light-italic">study projects</em>, so take them with a grain of salt. <a href="https://github.com/dreamyguy/color-consolidator">Color Consolidator</a> is an application that was created to help a group of UX and Front-enders consolidate and maintain color variables. <a href="https://github.com/dreamyguy/gitlogg">Gitlog to JSON</a> is a project created to scan relevant commit information from one or multiple repos and output it to JSON. <a href="https://github.com/dreamyguy/gitinsight">Gitinsight</a> was created to visualise <span className="monospace">gitlog</span> data, and at its current state I would not even call it a <em className="open-sans-light-italic">draft</em>, but it's a work in progress. All these projects have their flaws and are <em className="open-sans-light-italic fg-fav-purple-light">far from ready</em>, but they're out there, <em className="open-sans-light-italic fg-fav-purple-light">waiting for your contribution</em>!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="content align-center">
          <div className="row">
            <div className="small-12 columns">
              <p>Copyright &copy; <span className="year">{new Date().getFullYear()}</span> Wallace Sidhrée.
              </p>
              <p className="copyright-mit fg-gray"><a href="https://github.com/dreamyguy/sidhree-com">Source</a> free to use under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <ul className="bar pos-bottom-block">
        <li className="bar-item bg-fav-orange-light"></li>
        <li className="bar-item bg-fav-orange-middle"></li>
        <li className="bar-item bg-fav-orange-dark"></li>
        <li className="bar-item bg-fav-pink-shock"></li>
        <li className="bar-item bg-fav-purple-light"></li>
        <li className="bar-item bg-fav-purple-middle"></li>
        <li className="bar-item bg-fav-purple-dark"></li>
        <li className="bar-item bg-fav-green-light"></li>
        <li className="bar-item bg-fav-green-dark"></li>
        <li className="bar-item bg-fav-occre-light"></li>
      </ul>
    </div>
  );
};

export default App;
