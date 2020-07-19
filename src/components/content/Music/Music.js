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

const soMeLinks = [
  {
    url: 'https://itun.es/no/2n_Xib',
    service: 'iTunes',
    badge: 'apple',
  },
  {
    url: 'https://instagram.com/sidhree',
    service: 'Instagram',
    badge: 'instagram',
  },
  {
    url: 'https://www.facebook.com/sidhree',
    service: 'Facebook',
    badge: 'facebook-f',
  },
  {
    url: 'https://www.twitter.com/sidhree',
    service: 'Twitter',
    badge: 'twitter',
  },
  {
    url: 'https://www.amazon.com/s/ref=ntt_srch_drd_B06XXS8G9J?ie=UTF8&amp;field-keywords=Wallace%20Sidhrée&amp;index=digital-music',
    service: 'Amazon',
    badge: 'amazon',
  },
];

const single = {
  artistName: 'Wallace Sidhrée',
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
  songName: 'Futures Past',
  releaseDate: '5th April 2017',
  spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
  spotifyArtist: '0EiGue54P0MDdLnwCZ1nQp',
  spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
  // spotifyAlbum: '45B5EHRo8X7RYuRuWUge5z', // organsm
  // spotifyTrack: '0LhHyREYRFnWGPjgaAWnOf', // organsm
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

const otherServices = [
  {
    url: '',
    service: '7digital',
    badge: '7digital',
  },
  {
    url: '',
    service: '8tracks',
    badge: '8tracks',
  },
  {
    url: '',
    service: '247',
    badge: '247',
  },
  {
    url: '',
    service: 'akazoo',
    badge: 'akazoo',
  },
  {
    url: '',
    service: 'awa',
    badge: 'awa',
  },
  {
    url: 'https://www.cdbaby.com/cd/wallacesidhree',
    service: 'CD Baby',
    badge: 'cdbaby',
  },
  {
    url: 'https://www.deezer.com/us/artist/12224378',
    service: 'Deezer',
    badge: 'deezer',
  },
  {
    url: '',
    service: 'EMusic',
    badge: 'emusic',
  },
  {
    url: '',
    service: 'Great Indie Music',
    badge: 'great-indie-music',
  },
  {
    url: '',
    service: 'Groove',
    badge: 'groove',
  },
  {
    url: '',
    service: 'iHeart Radio',
    badge: 'iheart-radio',
  },
  {
    url: '',
    service: 'iMusica',
    badge: 'imusica',
  },
  {
    url: '',
    service: 'Inprodicon',
    badge: 'inprodicon',
  },
  {
    url: '',
    service: 'Jaxsta',
    badge: 'jaxsta',
  },
  {
    url: '',
    service: 'KDigital',
    badge: 'kdigital',
  },
  {
    url: '',
    service: 'KKBox',
    badge: 'kkbox',
  },
  {
    url: '',
    service: 'Kuack',
    badge: 'kuack',
  },
  {
    url: '',
    service: 'Line Music',
    badge: 'line-music',
  },
  {
    url: '',
    service: 'Medianet',
    badge: 'medianet',
  },
  {
    url: 'http://no.napster.com/artist/wallace-sidhree',
    service: 'Napster',
    badge: 'napster',
  },
  {
    url: '',
    service: 'Pandora',
    badge: 'pandora',
  },
  {
    url: '',
    service: 'Rumblefish',
    badge: 'rumblefish',
  },
  {
    url: 'http://www.saavn.com/s/artist/wallace-sidhree-artist/3tozGP,JaRw_',
    service: 'Saavn',
    badge: 'saavn',
  },
  {
    url: 'https://www.shazam.com/artist/203845684/wallace-sidhre%CC%81e',
    service: 'Shazam',
    badge: 'shazam',
  },
  {
    url: 'http://www.slacker.com/artist/wallace-sidhree',
    service: 'Slacker Radio',
    badge: 'slacker-radio',
  },
  {
    url: '',
    service: 'Sound Exchange',
    badge: 'sound-exchange',
  },
  {
    url: '',
    service: 'Tradebit',
    badge: 'tradebit',
  },
  {
    url: '',
    service: 'Yandex',
    badge: 'yandex',
  },
  {
    url: '',
    service: 'YouTube',
    badge: 'youtube',
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

const article = {
  articleDate: '2017.04.03',
  articleHeading: `Wallace Sidhrée to release his debut into the Progressive Rock scene, with the single 'Futures Past'`,
  articleSubheading: 'OFFICIAL PRESS RELEASE',
  articleBody: `
    <p class="gutter-bottom">Wallace Sidhrée is a Progressive Rock oriented multi-instrumentalist. With his haunting B3 &amp; bass tones alongside loaded guitar solos, Wallace invites us to reflect upon futures that passed us by - futures that never were and will never be.</p>
    <p class="gutter-bottom">The whole track was either played (flute, guitars, bass &amp; keyboard) or programmed (drums &amp; sampled voice) at his tiny little studio in his (our) own flat in Oslo, Norway. The track is heavily influenced by Italian Progressive Rock, which is deeply rooted on distorted organs, melodic solos and spellbound vocals (PFM, Il Paese Dei Balocchi, Museo Rosenbach). Certain passages can sound a lot like Camel and even Yes. There's certainly a tinge of Scandinavian Prog, which is usually recognized by its weight and depth.</p>
    <p class="gutter-bottom">This single is a prelude to an upcoming full album, which Wallace is committed to deliver by the end of 2017. It is a result of an incredible effort by a single person; one that composed, recorded, produced and published a single and plans to pull-off a full-length album within the same year. It might not happen since he must reconcile his musicianship with having a full-time job as a programmer, being a husband (/my husband) and caring for a furry cute-overload Golden Retriever - but his ambition intrigues me and makes me want to listen to the tale he has to tell.</p>
    <p class="gutter-bottom">When asked if he'd tour to promote his single, Wallace replies that he's fully committed to the recording &amp; production of his album. He also sneers and says " - it will be interesting to go out there, you know, touring. Playing all instruments at the same time will be... tricky.". That would be a 'no', for now, but he said he will be working around that challenge.</p>
    <p class="open-sans-light-italic">— Fatima Sidhrée</p>
  `
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
      <MusicAbout
        artistName={single.artistName}
        role={pageDetails.role}
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
