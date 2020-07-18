import React from "react";
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
  isrc: 'NOW6M1777777',
  label: 'Mëllon Records',
  name: 'Futures Past',
  releaseDate: '5th April 2017',
  spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
  upc: '191061543961',
};

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

const Music = () => (
  <>
    {renderHead()}
    <Section sectionClasses="about" contentClasses="text-shadow-dark">
      <MusicAbout />
    </Section>
    <Section sectionClasses="album">
      <MusicSingle single={single} />
    </Section>
    <Section sectionClasses="spotify">
      <MusicBadgesListenTo />
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
    <Section sectionClasses="bio">
      <MusicBio />
    </Section>
  </>
);

export default Music;
