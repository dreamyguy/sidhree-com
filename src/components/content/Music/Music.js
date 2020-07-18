import React from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import MusicAbout from "./MusicAbout";
import MusicArticle from "./MusicArticle";
import MusicBadgesListenMore from "./MusicBadgesListenMore";
import MusicBadgesListenTo from "./MusicBadgesListenTo";
import MusicBio from "./MusicBio";
import MusicContact from "./MusicContact";
import MusicSeparator from "./MusicSeparator";
import MusicSingle from "./MusicSingle";
import Section from "../../layout/Section/Section";
import './Music.scss';

const single = {
  author: 'Wallace Sidhrée',
  byComposed: 'Wallace Sidhrée',
  byMastered: 'Joshua Carney',
  byMixed: 'Joshua Carney',
  byPerformed: 'Wallace Sidhrée',
  byProduced: 'Wallace Sidhrée',
  contactEmail: 'w@sidhree.com',
  contactPhone: '+47 40481863',
  // isAlbum: true, // organsm
  isrc: 'NOW6M1777777',
  label: 'Mëllon Records',
  name: 'Futures Past',
  releaseDate: '5th April 2017',
  spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
  spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
  // spotifyTrack: '0LhHyREYRFnWGPjgaAWnOf', // organsm
  // spotifyAlbum: '45B5EHRo8X7RYuRuWUge5z', // organsm
  // spotifyAlbumHeight: '173', // organsm
  upc: '191061543961',
};

const listenToBadges = [
  {
    url: 'https://itun.es/no/Zn_Xib?i=1221063545',
    service: 'Apple iTunes',
    badge: 'itunes',
  },
  {
    url: 'https://play.google.com/music/m/Tkx3uymxh6p4x2ebtxua7zcjvma?t=Futures_Past_-_Wallace_Sidhree',
    service: 'Google Play Music',
    badge: 'google-play-music',
  },
  {
    url: 'https://open.spotify.com/track/42WaYYO17qAoYyyYhwrCGj',
    service: 'Spotify',
    badge: 'spotify',
  },
  {
    url: 'http://sidhree.bandcamp.com/track/futures-past',
    service: 'Bandcamp',
    badge: 'bandcamp',
  },
  {
    url: 'https://tidal.com/track/72191707',
    service: 'Tidal',
    badge: 'tidal',
  },
  {
    url: 'https://www.amazon.com/Futures-Past-Wallace-Sidhr%C3%A9e/dp/B06XXS9635/',
    service: 'Amazon',
    badge: 'amazon',
  },
];

const pageDetails = {
  name: "Wallace Sidhrée",
  role: "Progressive Rock Artist",
  homeUrl: "http://sidhree.com/progressive-rock/futures-past/",
  articleTitle: "Wallace Sidhrée to release his debut into the Progressive Rock scene, with the single 'Futures Past'",
  description: "Wallace Sidhrée is a Progressive Rock artist. With his haunting B3 and bass tones alongside loaded guitar solos, Wallace invites us to reflect upon futures that passed us by.",
  image: "/static/img/music/og-images/og-sidhree-logo-band.png",
  imageType: "image/png",
  imageWidth: "1200",
  imageHeight: "1200",
};

const renderHead = () => {
  const {
    name,
    role,
    homeUrl,
    id,
    articleTitle,
    description,
    image,
    imageType,
    imageWidth,
    imageHeight,
    twitterCard,
  } = pageDetails;

  return (
    <Helmet>
      <title>{articleTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={homeUrl} />
      <meta property="og:site_name" content={`${name} - ${role}`} />
      <meta property="og:title" content={articleTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="twitter:site" content={id} />
      <meta property="twitter:site:id" content={id} />
      <meta property="twitter:creator" content={id} />
      <meta property="twitter:creator:id" content={id} />
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:title" content={articleTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={image} />
      <meta property="twitter:image:width" content={imageWidth} />
      <meta property="twitter:image:height" content={imageHeight} />
    </Helmet>
  )
};

const Music = ({ withBio }) => (
  <>
    {renderHead()}
    <Section sectionClasses="about" contentClasses="text-shadow-dark">
      <MusicAbout />
    </Section>
    <Section sectionClasses="album">
      <MusicSingle single={single} />
    </Section>
    <Section sectionClasses="spotify">
      <MusicBadgesListenTo
        authorName={single.author}
        listenToBadges={listenToBadges}
        singleName={single.name}
      />
    </Section>
    <Section sectionClasses="article">
      <MusicArticle />
    </Section>
    <MusicSeparator />
    <Section sectionClasses="contact">
      <MusicContact />
    </Section>
    <MusicSeparator />
    <Section sectionClasses="listen-bottom">
      <MusicBadgesListenMore />
    </Section>
    <MusicSeparator />
    {withBio &&
      <Section sectionClasses="bio">
        <MusicBio />
      </Section>
    }
  </>
);

Music.propTypes = {
  withBio: PropTypes.bool,
};

export default Music;
