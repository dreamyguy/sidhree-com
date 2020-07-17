import React from "react";
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

const Music = () => (
  <>
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
