import React from "react";
import PropTypes from 'prop-types';
import Head from "../../layout/Head/Head";
import MusicAbout from "./MusicAbout";
import MusicArticle from "./MusicArticle";
import MusicBadgesListenMore from "./MusicBadgesListenMore";
import MusicBadgesListenTo from "./MusicBadgesListenTo";
import MusicBio from "./MusicBio";
import MusicContact from "./MusicContact";
import MusicRelatedArtists from "./MusicRelatedArtists";
import MusicSeparator from "./MusicSeparator";
import MusicSingle from "./MusicSingle";
import Section from "../../layout/Section/Section";
import {
  getArticleDetails,
  getListenToDetails,
  getReleaseRelatedArtists,
  getReleaseDetails,
  getSongPageDetails,
} from "../../../data/getData";
import {
  article,
  musicPageDetails,
  otherServices,
  single,
  soMeLinks,
} from './../../../data';
import './Music.scss';

const Music = ({ release, withBio }) => {
  const mergedPageDetails = { ...musicPageDetails, ...getSongPageDetails(release) };
  const mergedReleaseDetails = { ...single, ...getReleaseDetails(release) };

  return (
    <>
      <Head pageDetails={mergedPageDetails} />
      <Section sectionClasses="about" contentClasses="text-shadow-dark">
        <MusicAbout
          artistName={mergedReleaseDetails.artistName}
          role={mergedPageDetails.role}
          soMeLinks={soMeLinks}
          spotifyArtist={mergedReleaseDetails.spotifyArtist}
        />
      </Section>
      <Section sectionClasses="album">
        <MusicSingle single={mergedReleaseDetails} />
      </Section>
      <Section sectionClasses="spotify">
        <MusicBadgesListenTo
          artistName={mergedReleaseDetails.artistName}
          listenToBadges={getListenToDetails(release)}
          singleName={mergedReleaseDetails.songName}
        />
      </Section>
      <Section sectionClasses="article">
        <MusicArticle
          article={getArticleDetails(release)}
        />
      </Section>
      <Section sectionClasses="related-artists">
        <MusicRelatedArtists
          relatedArtists={getReleaseRelatedArtists(release)}
          singleName={mergedReleaseDetails.songName}
        />
      </Section>
      <MusicSeparator />
      <Section sectionClasses="contact">
        <MusicContact />
      </Section>
      <MusicSeparator />
      <Section sectionClasses="listen-bottom">
        <MusicBadgesListenMore
          artistName={mergedReleaseDetails.artistName}
          otherServices={otherServices}
          singleName={mergedReleaseDetails.songName}
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
};

Music.propTypes = {
  withBio: PropTypes.bool,
};

export default Music;
