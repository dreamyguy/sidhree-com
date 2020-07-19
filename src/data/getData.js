export const getSongPageDetails = release => {
  let songPageDetails = '';
  if (release === 'transformation') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/transformation",
      articleTitle: "Transformation, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/og-images/og-release-transformation.png",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'homecoming') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/homecoming",
      articleTitle: "Homecoming, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/og-images/og-release-homecoming.png",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'remembrance') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/remembrance",
      articleTitle: "Remembrance, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/og-images/og-release-remembrance.png",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'discovery') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/discovery",
      articleTitle: "Discovery, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/og-images/og-release-discovery.png",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'resolution') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/piano-solo/resolution",
      articleTitle: "Resolution, a piano-solo by Wallace Sidhrée",
      description: "",
      image: "/static/img/music/og-images/og-release-resolution.png",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "1200",
    };
  } else if (release === 'organsm') {
    songPageDetails = {
      homeUrl: "http://sidhree.com/hard-jazz/organsm",
      articleTitle: "Organsm",
      description: "",
      image: "/static/img/music/og-images/og-release-organsm.png",
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
      isAlbum: false,
      isrc: 'NOW6M1777777',
      songName: 'Transformation',
      releaseDate: '5th April 2017',
      spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
      spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
      upc: '191061543961',
    }
  } else if (release === 'homecoming') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      isAlbum: false,
      isrc: 'NOW6M1777777',
      songName: 'Homecoming',
      releaseDate: '5th April 2017',
      spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
      spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
      upc: '191061543961',
    };
  } else if (release === 'remembrance') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      isAlbum: false,
      isrc: 'NOW6M1777777',
      songName: 'Remembrance',
      releaseDate: '5th April 2017',
      spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
      spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
      upc: '191061543961',
    };
  } else if (release === 'discovery') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      isAlbum: false,
      isrc: 'NOW6M1777777',
      songName: 'Discovery',
      releaseDate: '5th April 2017',
      spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
      spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
      upc: '191061543961',
    };
  } else if (release === 'resolution') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      isAlbum: false,
      isrc: 'NOW6M1777777',
      songName: 'Resolution',
      releaseDate: '5th April 2017',
      spotifyAlbum: '102vu2A0fZ7gcxSpB0Iwef',
      spotifyTrack: '42WaYYO17qAoYyyYhwrCGj',
      upc: '191061543961',
    };
  } else if (release === 'organsm') {
    releaseDetails = {
      byMastered: 'Wallace Sidhrée',
      byMixed: 'Wallace Sidhrée',
      isAlbum: true,
      isrc: 'NOW6M1777777',
      songName: 'Organsm',
      releaseDate: '5th April 2017',
      spotifyAlbum: '45B5EHRo8X7RYuRuWUge5z',
      spotifyTrack: '0LhHyREYRFnWGPjgaAWnOf',
      spotifyAlbumHeight: '173',
      upc: '191061543961',
    };
  }
  return releaseDetails;
};
