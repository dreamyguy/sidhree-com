import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MusicAboutPic from './MusicAboutPic';
import { isNotEmptyArray } from '../../../utils/isEmptyUtil';
import './MusicAbout.scss';

const renderSoMe = ({ artistName, soMeLinks }) => {
  const output = [];
  if (soMeLinks && isNotEmptyArray(soMeLinks)) {
    soMeLinks.map(b => {
      output.push(
        <li key={uuidv4()}>
          <a href={b.url} title={`${artistName} on ${b.service}`} className="no-decor">
            <i className={`icon icon-3x icon-fa-${b.badge}`} />
          </a>
        </li>
      )
      return null;
    })
    return output;
  }
  return null;
};

const MusicAbout = ({ artistName, role, soMeLinks, spotifyArtist }) => {
  return (
    <div className="row">
      <div className="small-12 columns align-center">
        <MusicAboutPic />
        <h1 className="heading-one open-sans-light fg-sb-graylighter gutter-top-half no-margin-bottom">{artistName}</h1>
        <h3 className="heading-three fg-sb-gray">{role}</h3>
        <ul className="list-inline-block align-center">
          <li>
            <a href={`https://open.spotify.com/artist/${spotifyArtist}`} title={`${artistName} on Spotify`} className="no-decor">
              <i className="icon icon-3x icon-fa-spotify" />
            </a>
          </li>
          {renderSoMe({ artistName, soMeLinks })}
          <li>
            <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${spotifyArtist}&size=detail&theme=dark&show-count=0`} width="180" height="56" scrolling="no" frameborder="0" style={{ border: 'none', overflow: 'hidden', margin: '0 auto'}} allowtransparency="true" title="spotify artist follow button" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MusicAbout;
