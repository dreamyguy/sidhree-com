import React from "react";
import PropTypes from 'prop-types';
import Head from "../../layout/Head/Head";
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

import {
  article,
  listenToBadges,
  otherServices,
  musicPageDetails,
  single,
  soMeLinks,
} from './../../../data';

const songPageDetails = {
  homeUrl: "http://sidhree.com/progressive-rock/futures-past/",
  articleTitle: "Wallace Sidhrée to release his debut into the Progressive Rock scene, with the single 'Futures Past'",
  description: "Wallace Sidhrée is a Progressive Rock artist. With his haunting B3 and bass tones alongside loaded guitar solos, Wallace invites us to reflect upon futures that passed us by.",
  image: "/static/img/music/og-images/og-sidhree-logo-band.png", // To be replaced with song cover
  imageType: "image/png",
  imageWidth: "1200",
  imageHeight: "1200",
};

const mergedPageDetails = { ...musicPageDetails, songPageDetails };

const Music = ({ withBio }) => (
  <>
    <Head pageDetails={mergedPageDetails} />
    <Section sectionClasses="about" contentClasses="text-shadow-dark">
      <MusicAbout
        artistName={single.artistName}
        role={musicPageDetails.role}
        soMeLinks={soMeLinks}
        spotifyArtist={single.spotifyArtist}
      />
    </Section>
    <Section sectionClasses="album">
      <MusicSingle single={single} />
    </Section>
    <Section sectionClasses="spotify">
      <MusicBadgesListenTo
        artistName={single.artistName}
        listenToBadges={listenToBadges}
        singleName={single.songName}
      />
    </Section>
    <Section sectionClasses="article">
      <MusicArticle
        articleBody={article.articleBody}
        articleDate={article.articleDate}
        articleHeading={article.articleHeading}
        articleSubheading={article.articleSubheading}
      />
    </Section>
    <MusicSeparator />
    <Section sectionClasses="contact">
      <MusicContact />
    </Section>
    <MusicSeparator />
    <Section sectionClasses="listen-bottom">
      <MusicBadgesListenMore
        artistName={single.artistName}
        otherServices={otherServices}
        singleName={single.songName}
      />
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
