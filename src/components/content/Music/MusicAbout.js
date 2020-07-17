import React from 'react';
import MusicAboutPic from './MusicAboutPic';
import './MusicAbout.scss';

const MusicAbout = () => {
  return (
    <div className="row">
      <div className="small-12 columns align-center">
        <MusicAboutPic />
        <h1 className="heading-one open-sans-light fg-sb-graylighter gutter-top-half no-margin-bottom">Wallace Sidhrée</h1>
        <h3 className="heading-three fg-sb-gray">Progressive Rock Artist</h3>
        <ul className="list-inline-block align-center">
          <li><a href="https://open.spotify.com/artist/0EiGue54P0MDdLnwCZ1nQp" title="Wallace Sidhrée on Spotify" className="no-decor"><i className="icon icon-3x icon-fa-spotify"></i></a></li>
          <li><a href="https://itun.es/no/2n_Xib" title="Wallace Sidhrée on iTunes" className="no-decor"><i className="icon icon-3x icon-fa-apple"></i></a></li>
          <li><a href="https://instagram.com/sidhree" title="Wallace Sidhrée on Instagram" className="no-decor"><i className="icon icon-3x icon-fa-instagram"></i></a></li>
          <li><a href="https://www.facebook.com/sidhree" title="Wallace Sidhrée on Facebook" className="no-decor"><i className="icon icon-3x icon-fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/sidhree" title="Wallace Sidhrée on Twitter" className="no-decor"><i className="icon icon-3x icon-fa-twitter"></i></a></li>
          <li><a href="https://www.amazon.com/s/ref=ntt_srch_drd_B06XXS8G9J?ie=UTF8&amp;field-keywords=Wallace%20Sidhrée&amp;index=digital-music" title="Wallace Sidhrée on Amazon" className="no-decor"><i className="icon icon-3x icon-fa-amazon"></i></a></li>
          <li>
            <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:0EiGue54P0MDdLnwCZ1nQp&amp;size=detail&amp;theme=dark&amp;show-count=0" width="180" height="56" scrolling="no" frameBorder="0" style={{ border: 'none', overflow: 'hidden', margin: '0 auto'}} allowtransparency="true" title="spotify player" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MusicAbout;
