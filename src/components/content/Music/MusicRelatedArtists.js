import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isNotEmptyArray } from '../../../utils/isEmptyUtil';
import './MusicRelatedArtists.scss';

const renderRelatedArtists = relatedArtists => {
  const output = [];
  relatedArtists.map((a, i) => {
    const separator = () => {
      let separator = ',';
      // if (i === relatedArtists.length - 2) {
      //   separator = ' and';
      if (i === relatedArtists.length - 1) {
        separator = ' and other similar artists.';
      }
      return separator;
    }
    output.push(
      <li key={uuidv4()}>
        <span>
          <a href={a.artistSpotifyUrl} title={a.artistName} className="no-decor">
            {a.artistName}
          </a>
          {separator()}&nbsp;
        </span>
      </li>
    );
    return null;
  })
  return output;
};

const MusicRelatedArtists = ({ relatedArtists, singleName }) => {
  if (relatedArtists && isNotEmptyArray(relatedArtists)) {
    return (
      <div className="row">
        <div className="small-12 columns">
        <h2 className="heading-two open-sans-light fg-sb-graylighter gutter-bottom">
          '{singleName}' is influenced by and/or similar to:</h2>
          <ul className="related-artists-list list-inline-block">
            {renderRelatedArtists(relatedArtists)}
          </ul>
        </div>
      </div>
    );
  }
  return null;
};

export default MusicRelatedArtists;
