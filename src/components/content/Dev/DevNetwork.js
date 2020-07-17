import React from 'react';
import './DevNetwork.scss';

const DevNetwork = () => {
  return (
    <ul className="network-list centered">
      <li><a href="https://github.com/dreamyguy/" title="GitHub" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-github"></i></a></li>
      <li><a href="https://twitter.com/dreamyguy" title="Twitter" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/dreamyguy" title="LinkedIn" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-linkedin-square"></i></a></li>
      <li><a href="http://stackoverflow.com/users/909777/wallace-sidhr%C3%A9e" title="Stack Overflow" className="fg-fav-beige-light no-decor"><i className="icon icon-3x icon-fa-stack-overflow"></i></a></li>
    </ul>
  );
};

export default DevNetwork;
