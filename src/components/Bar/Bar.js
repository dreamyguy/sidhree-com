import React from 'react';
import './Bar.scss';

const Bar = props => {
  const { bottom, top } = props;
  return (
    <ul className={`bar${bottom ? ' pos-bottom-block' : ''}${top ? ' pos-top-block' : ''}`}>
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
  );
};

export default Bar;
