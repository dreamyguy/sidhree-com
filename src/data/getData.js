// Wallace-Sidhree---Futures-Past---Progressive-Rock.jpg
// Wallace-Sidhree---Transformation---Piano-Solo.jpg
// Wallace-Sidhree---Homecoming---Piano-Solo.jpg
// Wallace-Sidhree---Remembrance---Piano-Solo.jpg
// Wallace-Sidhree---Discovery---Piano-Solo.jpg
// Wallace-Sidhree---Resolution---Piano-Solo.jpg
// Wallace-Sidhree---Golden-Days.jpg
// Wallace-Sidhree---Organsm---Hard-Jazz.jpg

import { article, listenToBadges, relatedArtists } from './index';

export const getSongPageDetails = release => {
  let songPageDetails = '';
  if (release === 'transformation') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/transformation",
      articleTitle: "Transformation, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Transformation---Piano-Solo---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'homecoming') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/homecoming",
      articleTitle: "Homecoming, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Homecoming---Piano-Solo---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'remembrance') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/remembrance",
      articleTitle: "Remembrance, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Remembrance---Piano-Solo---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'discovery') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/discovery",
      articleTitle: "Discovery, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Discovery---Piano-Solo---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'resolution') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/resolution",
      articleTitle: "Resolution, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Resolution---Piano-Solo---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'golden-days') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/golden-days",
      articleTitle: "Golden Days, a piano-solo EP by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Golden-Days---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'organsm') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/hard-jazz/organsm",
      articleTitle: "Organsm",
      description: "",
      image: "/static/img/music/release/Wallace-Sidhree---Organsm---Hard-Jazz---1200.jpg",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  }
  return songPageDetails;
};

export const getReleaseDetails = release => {
  let releaseDetails = '';
  if (release === 'transformation') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '04:54',
      image: "/static/img/music/release/Wallace-Sidhree---Transformation---Piano-Solo---640.jpg",
      isAlbum: false,
      isrc: 'NOW6M1901010',
      songName: 'Transformation',
      submissionDate: 'July 25, 2019',
      releaseDate: 'August 16, 2019',
      spotifyAlbum: '2edx3iNIHWxj52aazCU6SR',
      spotifyTrack: '2P7f4mz5sdeXjtSWfNiYay',
      upc: '0631060268767',
    }
  } else if (release === 'homecoming') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '03:39',
      image: "/static/img/music/release/Wallace-Sidhree---Homecoming---Piano-Solo---640.jpg",
      isAlbum: false,
      isrc: 'NOW6M1901020',
      songName: 'Homecoming',
      submissionDate: 'August 17, 2019',
      releaseDate: 'September 13, 2019',
      spotifyAlbum: '6OngcHCkwHDGCsRCxxPYzG',
      spotifyTrack: '58LvenhIyyNiSuDgMpE1Sl',
      upc: '0631060500225',
    };
  } else if (release === 'remembrance') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '04:12',
      image: "/static/img/music/release/Wallace-Sidhree---Remembrance---Piano-Solo---640.jpg",
      isAlbum: false,
      isrc: 'NOW6M1901030',
      songName: 'Remembrance',
      submissionDate: 'August 27, 2019',
      releaseDate: 'October 14, 2019',
      spotifyAlbum: '6eqXspnsxeypNAyXKB4tEG',
      spotifyTrack: '2CgIfbApZQRcEWcLJwEGiO',
      upc: '0631060342764',
    };
  } else if (release === 'discovery') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '03:08',
      image: "/static/img/music/release/Wallace-Sidhree---Discovery---Piano-Solo---640.jpg",
      isAlbum: false,
      isrc: 'NOW6M1901040',
      songName: 'Discovery',
      submissionDate: 'October 06, 2019',
      releaseDate: 'November 15, 2019',
      spotifyAlbum: '7J3NPKHOZPvyLn44ONEUct',
      spotifyTrack: '2h3rBOiGpaCog96q1MnDvv',
      upc: '0631060572352',
    };
  } else if (release === 'resolution') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '02:30',
      image: "/static/img/music/release/Wallace-Sidhree---Resolution---Piano-Solo---640.jpg",
      isAlbum: false,
      isrc: 'NOW6M1901050',
      songName: 'Resolution',
      submissionDate: 'November 15, 2019',
      releaseDate: 'December 13, 2019',
      spotifyAlbum: '68nRAVTaKPDzKl2Hy6f3WX',
      spotifyTrack: '1EWai0RFqbxiN9fEEOjTPz',
      upc: '0713929058228',
    };
  } else if (release === 'golden-days') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '18:23',
      image: "/static/img/music/release/Wallace-Sidhree---Golden-Days---640.jpg",
      isAlbum: true,
      isrc: '',
      songName: 'Golden Days',
      submissionDate: 'November 15, 2019',
      releaseDate: 'December 20, 2019',
      spotifyAlbum: '7t0AGGzMjrgDpvgNQUYER4',
      spotifyTrack: '',
      spotifyAlbumHeight: '235',
      upc: '191061543961',
    };
  } else if (release === 'organsm') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      duration: '04:24',
      image: "/static/img/music/release/Wallace-Sidhree---Organsm---Hard-Jazz---640.jpg",
      isAlbum: true,
      isrc: '',
      songName: 'Organsm',
      submissionDate: 'April 06, 2020',
      releaseDate: 'April 17, 2020',
      spotifyAlbum: '45B5EHRo8X7RYuRuWUge5z',
      spotifyTrack: '',
      spotifyAlbumHeight: '173',
      upc: '195266724132',
    };
  }
  return releaseDetails;
};

export const getReleaseRelatedArtists = release => {
  let releaseRelatedArtists = '';
  if (release === 'transformation') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'homecoming') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'remembrance') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'discovery') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'resolution') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'golden-days') {
    releaseRelatedArtists = [
      {
        artistName: 'Ludovico Einaudi',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj',
      },
      {
        artistName: 'Peter Sandberg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3LtlJprzuq0Ii8p8YFZXai',
      },
      {
        artistName: 'Yann Tiersen',
        artistSpotifyUrl: 'https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um',
      },
      {
        artistName: 'Luke Howard',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3duTXsC49HoPt4f4EySDKf',
      },
      {
        artistName: 'Karin Borg',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0mWi0Jr9Ir8GPGVBpQqI1W',
      },
      {
        artistName: 'Roberto Cacciapaglia',
        artistSpotifyUrl: 'https://open.spotify.com/artist/359LKbZWLk6u3IpyNE2CQG',
      },
      {
        artistName: 'Joep Beving',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VKfXEWzhUi9siHBDTI02Y',
      },
      {
        artistName: 'Max Richter',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW',
      },
    ];
  } else if (release === 'organsm') {
    releaseRelatedArtists = [
      {
        artistName: 'Elephant9',
        artistSpotifyUrl: 'https://open.spotify.com/artist/7fX6TkG03KYZv7jAaZKC5v',
      },
      {
        artistName: 'Krokofant',
        artistSpotifyUrl: 'https://open.spotify.com/artist/23A1NMMpoNpJkSlq4GwJUy',
      },
      {
        artistName: 'Juno El Grande',
        artistSpotifyUrl: 'https://open.spotify.com/artist/5anYQcPEvvSc4zFfO2ZoOC',
      },
      {
        artistName: 'Niacin',
        artistSpotifyUrl: 'https://open.spotify.com/artist/7hQwy8CWLxLlh0pw2tO4YW',
      },
      {
        artistName: 'Billy Sheehan',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0GXvIHZC6fUFoclPbf7Lbm',
      },
      {
        artistName: `Bushman'S Revenge`,
        artistSpotifyUrl: 'https://open.spotify.com/artist/23ElmuKLosPuHchIPXuq5G',
      },
      {
        artistName: 'JÜ',
        artistSpotifyUrl: 'https://open.spotify.com/artist/0hjeGYbdwj5BaxROxu1OxD',
      },
      {
        artistName: 'Møster',
        artistSpotifyUrl: 'https://open.spotify.com/artist/3zvJ3MlnXfDnmw4aIWtBZf',
      },
      {
        artistName: 'Grand General',
        artistSpotifyUrl: 'https://open.spotify.com/artist/2W0JpUXpt6nY3k1gblaUNc',
      },
      {
        artistName: 'Hedvig Mollestad Trio',
        artistSpotifyUrl: 'https://open.spotify.com/artist/33Ynrn4NZsANMBJsFFqB7Y',
      },
      {
        artistName: 'Jaza Jazzist',
        artistSpotifyUrl: 'https://open.spotify.com/artist/68HFSFMCZzyRjkkm9bv5Vt',
      },
    ];
  } else {
    // Fallback to 'Futures Past'
    releaseRelatedArtists = relatedArtists;
  }
  return releaseRelatedArtists;
};

export const getListenToDetails = release => {
  let listenToDetails = [];
  if (release === 'transformation') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/transformation-single/1476617288',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/B4bktfsrp24jy7nzdkoihfwltcq',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/track/2P7f4mz5sdeXjtSWfNiYay',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/track/transformation-piano-solo',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/track/114511282',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/watch?v=tH-h5FWJ9sA',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/105891422',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Transformation-Wallace-Sidhr%C3%A9e/dp/B07VXRVCP7/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'homecoming') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/homecoming-single/1478447196',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/Bzjsecyz3cwq2wpcw4gsxiblvze',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/track/58LvenhIyyNiSuDgMpE1Sl',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/track/homecoming',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/track/116128713',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/watch?v=y1rSLsPysQw',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/108445422',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Homecoming-Wallace-Sidhr%C3%A9e/dp/B07WP6NKPB/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'remembrance') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/remembrance-single/1479919853',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/Bngbi2kvrqnx3munysou5hv7nha',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/track/2CgIfbApZQRcEWcLJwEGiO',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/track/remembrance',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/track/117117525',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/watch?v=Z-cinnTOwTY',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/109896102',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Remembrance-Wallace-Sidhr%C3%A9e/dp/B07XF6SQ3C/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'discovery') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/discovery-single/1484066259',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/Bkoaxi2aybkt5z7zkivsmmludai',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/track/2h3rBOiGpaCog96q1MnDvv',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/track/discovery',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/track/120527889',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/watch?v=B0wFqOx-Zs8',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/115457792',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Discovery-Wallace-Sidhr%C3%A9e/dp/B07Z9JJRF7/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'resolution') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/resolution-single/1489483812',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/Bhf7wrmoymolxchxmakgr2u526u',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/track/1EWai0RFqbxiN9fEEOjTPz',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/track/resolution',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/track/123840236',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/watch?v=yGq1DcqGLUo',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/120807712',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Resolution-Wallace-Sidhr%C3%A9e/dp/B08232NT5F/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'golden-days') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/golden-days-ep/1489691489',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/B2s2sky4opwbmdpjw3yvcxikbfy',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/album/7t0AGGzMjrgDpvgNQUYER4',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/album/golden-days',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/album/124016292',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/playlist?list=OLAK5uy_nKK1WamMHIbwCr4Ir-aLOBYvJWxC6N6KM',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/120988732',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Golden-Days-Wallace-Sidhr%C3%A9e/dp/B0824VRKZK/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else if (release === 'organsm') {
    listenToDetails = [
      {
        url: 'https://music.apple.com/no/album/organsm-single/1506627443',
        service: 'Apple Music',
        badge: 'itunes',
      },
      {
        url: 'https://play.google.com/music/preview/B4f5arv4whdvgkm7fjv3o4u2dh4',
        service: 'Google Play Music',
        badge: 'google-play-music',
      },
      {
        url: 'https://open.spotify.com/album/45B5EHRo8X7RYuRuWUge5z',
        service: 'Spotify',
        badge: 'spotify',
      },
      {
        url: 'https://sidhree.bandcamp.com/album/organsm',
        service: 'Bandcamp',
        badge: 'bandcamp',
      },
      {
        url: 'https://tidal.com/browse/album/136589334',
        service: 'Tidal',
        badge: 'tidal',
      },
      {
        url: 'https://music.youtube.com/playlist?list=OLAK5uy_lkYVw-HXAZy3Qp05sc7Sjutgh4kYOxpvM',
        service: 'Youtube Music',
        badge: 'youtube-music',
      },
      {
        url: 'https://www.deezer.com/us/album/140356412',
        service: 'Deezer',
        badge: 'deezer',
      },
      {
        url: 'https://www.amazon.com/Organsm-Wallace-Sidhr%C3%A9e/dp/B086TWD8J5/',
        service: 'Amazon',
        badge: 'amazon',
      },
    ];
  } else {
    // Fallback to 'Futures Past'
    listenToDetails = listenToBadges;
  }
  return listenToDetails;
};


export const getArticleDetails = release => {
  let articleDetails = {};
  if (release === 'transformation') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'homecoming') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'remembrance') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'discovery') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'resolution') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'golden-days') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else if (release === 'organsm') {
    articleDetails = {
      articleDate: '',
      articleHeading: ``,
      articleSubheading: '',
      articleBody: `
        <p class="gutter-bottom"></p>
        <p class="open-sans-light-italic">— Wallace Sidhrée</p>
      `
    };
  } else {
    // Fallback to 'Futures Past'
    articleDetails = article;
  }
  return articleDetails;
};
