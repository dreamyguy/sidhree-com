import React from 'react';
import './MusicSingle.scss';

const renderCredits = ({
  byComposed,
  byMastered,
  byMixed,
  byPerformed,
  byProduced,
}) => {
  if (
    byComposed &&
    byMastered &&
    byMixed &&
    byPerformed &&
    byProduced &&
    byComposed === byMastered &&
    byComposed === byMixed &&
    byComposed === byPerformed &&
    byComposed === byProduced
  ) {
    return (
      <p><span className="open-sans-semibold fg-sb-gray">Composed, Performed, Produced, Mixed &amp; Mastered by:</span> {byComposed}</p>
    )
  }
  if (
    byComposed &&
    byMastered &&
    byMixed &&
    byPerformed &&
    byProduced &&
    byComposed !== byMastered &&
    byComposed !== byMixed &&
    byComposed === byPerformed &&
    byComposed === byProduced &&
    byMastered === byMixed
  ) {
    return (
      <>
        <p><span className="open-sans-semibold fg-sb-gray">Composed, Performed &amp; Produced by:</span> {byComposed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mixed &amp; Mastered by:</span> {byMixed}</p>
      </>
    )
  }
  if (
    byComposed &&
    byMastered &&
    byMixed &&
    byPerformed &&
    byProduced &&
    byComposed !== byMastered &&
    byComposed !== byMixed &&
    byComposed === byPerformed &&
    byComposed === byProduced &&
    byMastered !== byMixed
  ) {
    return (
      <>
        <p><span className="open-sans-semibold fg-sb-gray">Composed, Performed &amp; Produced by:</span> {byComposed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mixed by:</span> {byMixed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mastered by:</span> {byMastered}</p>
      </>
    )
  }
  if (
    byComposed &&
    byMastered &&
    byMixed &&
    byPerformed &&
    byProduced &&
    byComposed !== byMastered &&
    byComposed !== byMixed &&
    byComposed === byPerformed &&
    byComposed !== byProduced &&
    byMastered !== byMixed &&
    byMastered !== byProduced &&
    byMixed !== byPerformed &&
    byMixed !== byProduced
  ) {
    return (
      <>
        <p><span className="open-sans-semibold fg-sb-gray">Composed &amp; Performed by:</span> {byComposed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Produced by:</span> {byProduced}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mixed by:</span> {byMixed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mastered by:</span> {byMastered}</p>
      </>
    )
  }
  if (
    byComposed &&
    byMastered &&
    byMixed &&
    byPerformed &&
    byProduced &&
    byComposed !== byMastered &&
    byComposed !== byMixed &&
    byComposed !== byPerformed &&
    byComposed !== byProduced &&
    byMastered !== byMixed &&
    byMastered !== byPerformed &&
    byMastered !== byProduced &&
    byMixed !== byPerformed &&
    byMixed !== byProduced
  ) {
    return (
      <>
        <p><span className="open-sans-semibold fg-sb-gray">Composed by:</span> {byComposed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Performed by:</span> {byPerformed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Produced by:</span> {byProduced}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mixed by:</span> {byMixed}</p>
        <p><span className="open-sans-semibold fg-sb-gray">Mastered by:</span> {byMastered}</p>
      </>
    )
  }
  // ! Other scenarios are irrelevant...
};

const MusicSingle = ({ single }) => {
  const {
    artistName,
    byComposed,
    byMastered,
    byMixed,
    byPerformed,
    byProduced,
    contactEmail,
    contactPhone,
    image = '',
    isAlbum = false,
    isrc,
    label,
    songName,
    releaseDate,
    spotifyTrack,
    spotifyAlbum,
    spotifyAlbumHeight = '80',
    upc,
  } = single;
  return (
    <>
      <div className="row album-meta">
        <div className="small-12 medium-5 columns">
          <div className="album-meta-art gutter-bottom">
            {image &&
              <img src={process.env.PUBLIC_URL + image} title={`${artistName} - ${songName}`} alt={`${artistName} - ${songName} [Album Cover]`}/>
            }
          </div>
        </div>
        <div className="small-12 medium-7 columns">
          <div className="album-meta-details">
          <p><span className="open-sans-semibold">{songName}</span> <span className="fg-sb-gray">{isAlbum ? '[EP]' : '[Single]'}</span></p>
            <p><span className="open-sans-semibold fg-sb-gray">Label:</span> {label}</p>
            <p className="show-at-666-up">{isrc && <><span className="open-sans-semibold fg-sb-gray">ISRC:</span> {isrc} | </>}<span className="open-sans-semibold fg-sb-gray">UPC:</span> {upc}</p>
            {isrc && <p className="hide-at-666-up"><span className="open-sans-semibold fg-sb-gray">ISRC:</span> {isrc}</p>}
            <p className="hide-at-666-up"><span className="open-sans-semibold fg-sb-gray">UPC:</span> {upc}</p>
            {renderCredits({
              byComposed,
              byMastered,
              byMixed,
              byPerformed,
              byProduced,
            })}
            <p><span className="open-sans-semibold fg-sb-gray">Contact:</span> <span className="email"><a href={`mailto:${contactEmail}`}>{contactEmail}</a></span> | {contactPhone}</p>
            <p className="open-sans-semibold-italic fg-sb-gray italic">Released on the <span className="fg-sb-graylight">{releaseDate}</span>:</p>
            {!isAlbum &&
              <iframe src={`https://open.spotify.com/embed/track/${spotifyTrack}`} width="100%" height="80" frameBorder="0" allowtransparency="true" className="gutter-top" title="spotify player" allow="encrypted-media" />
            }
          </div>
        </div>
      </div>
      {isAlbum &&
        <div className="row">
          <div className="small-12 columns">
            <iframe src={`https://open.spotify.com/embed/album/${spotifyAlbum}`} width="100%" height={spotifyAlbumHeight} frameBorder="0" allowtransparency="true" className="gutter-top" title="spotify player" allow="encrypted-media" />
          </div>
        </div>
      }
    </>
  );
};

export default MusicSingle;
