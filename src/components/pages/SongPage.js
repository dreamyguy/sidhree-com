import React from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Music from "../content/Music/Music";
import Wrapper from "../layout/Wrapper/Wrapper";

const pageDetails = {
  name: "Wallace Sidhrée",
  role: "Progressive Rock Artist",
  homeUrl: "http://sidhree.com/progressive-rock/futures-past/",
  locale: "en_US",
  localeSite: "en",
  id: "sidhree",
  articleTitle: "Wallace Sidhrée to release his debut into the Progressive Rock scene, with the single 'Futures Past'",
  description: "Wallace Sidhrée is a Progressive Rock artist. With his haunting B3 and bass tones alongside loaded guitar solos, Wallace invites us to reflect upon futures that passed us by.",
  image: "/static/img/music/og-images/og-sidhree-logo-band.png",
  imageType: "image/png",
  imageWidth: "1200",
  imageHeight: "1200",
  image2: "/static/img/music/og-images/og-sidhree-logo-alt-band.png",
  imageType2: "image/png",
  imageWidth2: "1200",
  imageHeight2: "620",
  image3: "/static/img/music/og-images/og-wallace-sidhree-band.png",
  imageType3: "image/png",
  imageWidth3: "1133",
  imageHeight3: "1133",
  imageFluidIcon: "/static/img/music/fluidicon/fluidicon.png",
  twitterCard: "summary_large_image",
  googleSiteVerification: "",
  googleAnalytics: "UA-3712583-6",
  // favicons
  yandexTableauWidget: "/static/img/music/appicons/yandex-browser-manifest.json",
  androidChrome192x192: "/static/img/music/appicons/android-chrome-192x192.png",
  manifest: "/static/img/music/appicons/manifest.json",
  favicon16x16: "/static/img/music/favicons/favicon-16x16.png",
  favicon32x32: "/static/img/music/favicons/favicon-32x32.png",
  favicon96x96: "/static/img/music/favicons/favicon-96x96.png",
  favicon230x230: "/static/img/music/favicons/favicon-230x230.png",
  favicon: "/static/img/music/favicons/favicon.ico",
  appleTouchIcon57x57: "/static/img/music/appicons/apple-touch-icon-57x57.png",
  appleTouchIcon60x60: "/static/img/music/appicons/apple-touch-icon-60x60.png",
  appleTouchIcon72x72: "/static/img/music/appicons/apple-touch-icon-72x72.png",
  appleTouchIcon76x76: "/static/img/music/appicons/apple-touch-icon-76x76.png",
  appleTouchIcon114x114: "/static/img/music/appicons/apple-touch-icon-114x114.png",
  appleTouchIcon120x120: "/static/img/music/appicons/apple-touch-icon-120x120.png",
  appleTouchIcon144x144: "/static/img/music/appicons/apple-touch-icon-144x144.png",
  appleTouchIcon152x152: "/static/img/music/appicons/apple-touch-icon-152x152.png",
  appleTouchIcon180x180: "/static/img/music/appicons/apple-touch-icon-180x180.png",
  coast228x228: "/static/img/music/appicons/coast-228x228.png",
  msapplicationTileImage: "/static/img/music/appicons/mstile-144x144.png",
  msapplicationConfig: "/static/img/music/appicons/browserconfig.xml",
  twitterImage: "/static/img/music/og-images/twitter.png",
};

const renderHead = () => {
  const {
    name,
    role,
    homeUrl,
    locale,
    localeSite,
    id,
    articleTitle,
    description,
    image,
    imageType,
    imageWidth,
    imageHeight,
    image2,
    imageType2,
    imageWidth2,
    imageHeight2,
    image3,
    imageType3,
    imageWidth3,
    imageHeight3,
    imageFluidIcon,
    twitterCard,
    twitterImage,
    googleSiteVerification,
    googleAnalytics,
    // favicons
    yandexTableauWidget,
    androidChrome192x192,
    manifest,
    favicon16x16,
    favicon32x32,
    favicon96x96,
    favicon230x230,
    favicon,
    appleTouchIcon57x57,
    appleTouchIcon60x60,
    appleTouchIcon72x72,
    appleTouchIcon76x76,
    appleTouchIcon114x114,
    appleTouchIcon120x120,
    appleTouchIcon144x144,
    appleTouchIcon152x152,
    appleTouchIcon180x180,
    coast228x228,
    msapplicationTileImage,
    msapplicationConfig,
  } = pageDetails;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Language" content="en" />
      <meta http-equiv="Content-Language" content={localeSite} />
      <title>{articleTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={homeUrl} />
      <meta property="og:site_name" content={`${name} - ${role}`} />
      <meta property="og:title" content={articleTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image" content={image2} />
      <meta property="og:image:type" content={imageType2} />
      <meta property="og:image:width" content={imageWidth2} />
      <meta property="og:image:height" content={imageHeight2} />
      <meta property="og:image" content={image3} />
      <meta property="og:image:type" content={imageType3} />
      <meta property="og:image:width" content={imageWidth3} />
      <meta property="og:image:height" content={imageHeight3} />
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
      <meta name="google-site-verification" content={googleSiteVerification} />
      <meta name="google-analytics" content={googleAnalytics} />
      <link rel="fluid-icon" href={imageFluidIcon} title={articleTitle} />
      <link rel="yandex-tableau-widget" href={yandexTableauWidget} />
      <link rel="icon" type="image/png" sizes="192x192" href={androidChrome192x192} />
      <link rel="manifest" href={manifest} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="transparent" />
      <meta name="application-name" content={id} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
      <link rel="icon" type="image/png" sizes="230x230" href={favicon230x230} />
      <link rel="shortcut icon" href={favicon} />
      <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57x57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60x60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon76x76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleTouchIcon114x114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleTouchIcon120x120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleTouchIcon144x144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152x152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180x180} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={id} />
      <link rel="icon" type="image/png" sizes="228x228" href={coast228x228} />
      <meta name="msapplication-TileColor" content="transparent" />
      <meta name="msapplication-TileImage" content={msapplicationTileImage} />
      <meta name="msapplication-config" content={msapplicationConfig} />
      <meta property="twitter:image" content={twitterImage} />
    </Helmet>
  )
};

const SongPage = ({ withBio }) => (
  <Wrapper isMusic>
    {renderHead()}
    <Music withBio={withBio} />
  </Wrapper>
);

SongPage.propTypes = {
  withBio: PropTypes.bool,
};

export default SongPage;
