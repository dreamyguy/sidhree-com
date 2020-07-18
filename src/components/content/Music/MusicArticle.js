import React from 'react';
import './MusicArticle.scss';

const MusicArticle = ({
  articleBody,
  articleDate,
  articleHeading,
  articleSubheading
}) => {
  return (
    <div className="row">
      <div className="small-12 columns">
        <h4 className="heading-four open-sans-light-italic fg-sb-graylight">{`${articleSubheading} - ${articleDate}`}</h4>
        <h1 className="heading-one open-sans-light fg-sb-graylighter">{articleHeading}</h1>
        <div className="fg-sb-graylight">
          <div dangerouslySetInnerHTML={{ __html: articleBody }} />
        </div>
      </div>
    </div>
  );
};

export default MusicArticle;
