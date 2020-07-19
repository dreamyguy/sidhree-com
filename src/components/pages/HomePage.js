import React from "react";
import Dev from "../content/Dev/Dev";
import Head from "../layout/Head/Head";
import Wrapper from "../layout/Wrapper/Wrapper";
import { devPageDetails } from './../../data';

const HomePage = () => (
  <Wrapper>
    <Head pageDetails={devPageDetails} />
    <Dev />
  </Wrapper>
);

export default HomePage;
