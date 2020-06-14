import React from 'react';
import './Section.scss';

const Section = props => {
  const { sectionClasses, contentClasses, children } = props;
  return (
    <section className={sectionClasses || ''}>
      <div className={`content${contentClasses ? ` ${contentClasses}` : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
