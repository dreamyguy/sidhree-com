import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isNotEmptyArray } from '../../../utils/isEmptyUtil';
import './MusicBadgesListenMore.scss';

const renderOtherServices = ({ authorName, otherServices }) => {
  const output = [];
  if (otherServices && isNotEmptyArray(otherServices)) {
    otherServices.map(b => {
      output.push(
        <li key={uuidv4()}>
          {b.url ? (
            <a href={b.url} title={`${authorName} on ${b.service}`} className="no-decor">
              <div className={`sprite sprite-music-service_${b.badge}`} />
            </a>
          ) : (
            <div className={`sprite sprite-music-service_${b.badge}`} />
          )}
        </li>
      )
      return null;
    })
    return output;
  }
  return null;
};

const MusicBadgesListenMore = ({ authorName, otherServices, singleName }) => {
  return (
    <div className="row">
      <div className="small-12 columns fg-sb-graylighter">
        <h2 id="other-providers" className="heading-two open-sans-light gutter-bottom">'{singleName}' also available on:</h2>
        <ul className="music-icons list-inline-block align-center gutter-top">
          {renderOtherServices({ authorName, otherServices })}
        </ul>
      </div>
    </div>
  );
};

export default MusicBadgesListenMore;
