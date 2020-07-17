import React from 'react';
import './MusicBadgesListenTo.scss';

const MusicBadgesListenTo = () => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <ul className="music-badges list-inline-block align-center">
          <li><a href="https://itun.es/no/Zn_Xib?i=1221063545" title="'Futures Past' by Wallace Sidhrée on Apple iTunes" className="no-decor">
              <div className="sprite sprite-badge_itunes"></div></a>
          </li>
          <li><a href="https://play.google.com/music/m/Tkx3uymxh6p4x2ebtxua7zcjvma?t=Futures_Past_-_Wallace_Sidhree" title="'Futures Past' by Wallace Sidhrée on Google Play Music" className="no-decor">
              <div className="sprite sprite-badge_google-play-music"></div></a>
          </li>
          <li><a href="https://open.spotify.com/track/42WaYYO17qAoYyyYhwrCGj" title="'Futures Past' by Wallace Sidhrée on Spotify" className="no-decor">
              <div className="sprite sprite-badge_spotify"></div></a>
          </li>
          <li><a href="http://sidhree.bandcamp.com/track/futures-past" title="'Futures Past' by Wallace Sidhrée on Bandcamp" className="no-decor">
              <div className="sprite sprite-badge_bandcamp"></div></a>
          </li>
          <li><a href="https://tidal.com/track/72191707" title="'Futures Past' by Wallace Sidhrée on Tidal" className="no-decor">
              <div className="sprite sprite-badge_tidal"></div></a>
          </li>
          <li><a href="https://www.amazon.com/Futures-Past-Wallace-Sidhr%C3%A9e/dp/B06XXS9635/" title="'Futures Past' by Wallace Sidhrée on Amazon" className="no-decor">
              <div className="sprite sprite-badge_amazon"></div></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MusicBadgesListenTo;
