import React from 'react';
import './MusicContact.scss';

const MusicContact = () => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <h2 className="heading-two open-sans-light fg-sb-graylighter">Contact</h2>
        <p className="gutter-bottom">Please direct all your questions to Wallace himself, and he will reply promptly (to the best of his ability).</p>
        <ul className="list-inline-block small-block-grid-2 medium-block-grid-5">
          <li className="fg-sb-graylighter">
            <p>Wallace Sidhrée</p>
            <p>+47 40481863</p>
          </li>
          <li>
            <p>E-mail</p>
            <p><span className="email"><a href="mailto:w@sidhree.com">w@sidhree.com</a></span></p>
          </li>
          <li>
            <p>Instagram</p>
            <p><a href="https://instagram.com/sidhree" title="Wallace Sidhrée on Instagram">@sidhree</a></p>
          </li>
          <li>
            <p>Facebook</p>
            <p><a href="https://www.facebook.com/sidhree" title="Wallace Sidhrée on Facebook">@sidhree</a></p>
          </li>
          <li>
            <p>Twitter</p>
            <p><a href="https://www.twitter.com/sidhree" title="Wallace Sidhrée on Twitter">@sidhree</a></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MusicContact;
