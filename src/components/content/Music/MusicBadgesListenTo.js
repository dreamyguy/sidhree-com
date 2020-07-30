import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isNotEmptyArray } from '../../../utils/isEmptyUtil';
import './MusicBadgesListenTo.scss';

// TODO: Missing badges for:
// 'youtube'
// 'deezer'

const renderBadges = ({ artistName, listenToBadges, singleName }) => {
  const output = [];
  if (listenToBadges && isNotEmptyArray(listenToBadges)) {
    listenToBadges.map(b => {
      output.push(
        <li key={uuidv4()}>
          <a href={b.url} title={`'${singleName}' by ${artistName} on ${b.service}`} className="no-decor">
            <div className={`sprite sprite-badge_${b.badge}`} />
          </a>
        </li>
      )
      return null;
    })
    return output;
  }
  return null;
};

const MusicBadgesListenTo = ({ artistName, listenToBadges, singleName }) => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <ul className="music-badges list-inline-block align-center">
          {renderBadges({ artistName, listenToBadges, singleName })}
        </ul>
      </div>
    </div>
  );
};

export default MusicBadgesListenTo;
