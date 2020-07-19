export const getSongDetails = release => {
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