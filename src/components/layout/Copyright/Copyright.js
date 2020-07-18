import React from 'react';
import './Copyright.scss';

const Copyright = ({ isMusic }) => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <p>Copyright &copy; <span className="year">{new Date().getFullYear()}</span> Wallace Sidhrée</p>
        {!isMusic &&
          <p className="copyright-mit fg-gray"><a href="https://github.com/dreamyguy/sidhree-com">Source</a> free to use under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
        }
      </div>
    </div>
  );
};

export default Copyright;
