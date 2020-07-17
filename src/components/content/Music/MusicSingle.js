import React from 'react';
import imgWallaceSidhreeFuturesPastSml from './../../../img/wallace-sidhree_futures-past-sml.jpg';
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
    author,
    byComposed,
    byMastered,
    byMixed,
    byPerformed,
    byProduced,
    contactEmail,
    contactPhone,
    isrc,
    label,
    name,
    releaseDate,
    spotifyTrack,
    upc,
  } = single;
  return (
    <div className="row album-meta">
      <div className="small-12 medium-5 columns">
        <div className="album-meta-art gutter-bottom"><img src={imgWallaceSidhreeFuturesPastSml} title={`${author} - ${name}`} alt={`${author} - ${name} [Album Cover]`}/></div>
      </div>
      <div className="small-12 medium-7 columns">
        <div className="album-meta-details">
          <p><span className="open-sans-semibold">{name}</span> <span className="fg-sb-gray">[Single]</span></p>
          <p><span className="open-sans-semibold fg-sb-gray">Label:</span> {label}</p>
          <p className="show-at-666-up"><span className="open-sans-semibold fg-sb-gray">ISRC:</span> {isrc} | <span className="open-sans-semibold fg-sb-gray">UPC:</span> {upc}</p>
          <p className="hide-at-666-up"><span className="open-sans-semibold fg-sb-gray">ISRC:</span> {isrc}</p>
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
          <iframe src={`https://embed.spotify.com/?uri=spotify:track:${spotifyTrack}`} width="100%" height="80" frameBorder="0" allowtransparency="true" className="gutter-top" title="spotify player" />
        </div>
      </div>
    </div>
  );
};

export default MusicSingle;
