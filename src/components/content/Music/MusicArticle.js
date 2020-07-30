import React from 'react';
import './MusicArticle.scss';

const MusicArticle = ({ article }) => {
  const {
    articleBody,
    articleDate,
    articleHeading,
    articleSubheading
  } = article;
  return (
    <div className="row">
      <div className="small-12 columns">
        {articleSubheading &&
          <h4 className="heading-four open-sans-light-italic fg-sb-graylight">{`${articleSubheading} - ${articleDate}`}</h4>
        }
        {articleHeading &&
          <>
            <h1 className="heading-one open-sans-light fg-sb-graylighter">{articleHeading}</h1>
            {articleBody &&
              <div className="fg-sb-graylight">
                <div dangerouslySetInnerHTML={{ __html: articleBody }} />
              </div>
            }
          </>
        }
      </div>
    </div>
  );
};

export default MusicArticle;
