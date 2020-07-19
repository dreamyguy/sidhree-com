import React from "react";
import PropTypes from 'prop-types';
import Head from "../layout/Head/Head";
import Music from "../content/Music/Music";
import Wrapper from "../layout/Wrapper/Wrapper";
import { musicPageDetails } from './../../data';

const SongPage = ({ release, withBio }) => (
  <Wrapper isMusic>
    <Head pageDetails={musicPageDetails} />
    <Music release={release} withBio={withBio} />
  </Wrapper>
);

SongPage.propTypes = {
  release: PropTypes.string,
  withBio: PropTypes.bool,
};

export default SongPage;
