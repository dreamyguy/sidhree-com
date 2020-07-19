// Wallace-Sidhree---Futures-Past---Progressive-Rock.jpg
// Wallace-Sidhree---Transformation---Piano-Solo.jpg
// Wallace-Sidhree---Homecoming---Piano-Solo.jpg
// Wallace-Sidhree---Remembrance---Piano-Solo.jpg
// Wallace-Sidhree---Discovery---Piano-Solo.jpg
// Wallace-Sidhree---Resolution---Piano-Solo.jpg
// Wallace-Sidhree---Golden-Days.jpg
// Wallace-Sidhree---Organsm---Hard-Jazz.jpg

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
