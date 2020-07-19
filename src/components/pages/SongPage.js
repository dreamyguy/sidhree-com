import React from "react";
import PropTypes from 'prop-types';
import Head from "../layout/Head/Head";
import Music from "../content/Music/Music";
import Wrapper from "../layout/Wrapper/Wrapper";
import { musicPageDetails } from './../../data';

const SongPage = ({ withBio }) => (
  <Wrapper isMusic>
    <Head pageDetails={musicPageDetails} />
    <Music withBio={withBio} />
  </Wrapper>
);

SongPage.propTypes = {
  withBio: PropTypes.bool,
};

export default SongPage;
