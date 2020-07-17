import React, { useEffect, useRef, useState } from 'react';
import imgWallaceSidhree1Sml from './../../../img/wallace-sidhree-1-sml.jpg';
import imgWallaceSidhree2Sml from './../../../img/wallace-sidhree-2-sml.jpg';
import imgWallaceSidhree3Sml from './../../../img/wallace-sidhree-3-sml.jpg';
import imgWallaceSidhree4Sml from './../../../img/wallace-sidhree-4-sml.jpg';
import imgWallaceSidhree5Sml from './../../../img/wallace-sidhree-5-sml.jpg';

const MusicAboutPic = () => {
  const myPic = useRef(null);
  const [chosenPic, setChosenPic] = useState('');

  const choosePic = () => {
    const thaPic = [
      imgWallaceSidhree1Sml,
      imgWallaceSidhree2Sml,
      imgWallaceSidhree3Sml,
      imgWallaceSidhree4Sml,
      imgWallaceSidhree5Sml,
    ];
    const randomNum = Math.floor((Math.random() * thaPic.length));
    setChosenPic(thaPic[randomNum]);
    myPic.current.style.backgroundImage  = `url("${thaPic[randomNum]}")`;
  };

  useEffect(() => {
    if (!chosenPic) {
      choosePic();
    }
  }, [chosenPic]);

  return <div ref={myPic} className="section-image centered" />;
};

export default MusicAboutPic;
