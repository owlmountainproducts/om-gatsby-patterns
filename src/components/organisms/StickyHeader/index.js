import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import IconBar from '../../molecules/IconBar';

/**
 * MOLECULE: The `<StickyHeader>` creates __.
 *
 */
const StickyHeader = ({ article, siteMeta }) => (
  <div className="sticky-header">
    <div className="sticky-header-inner">
      <Link to="/" className="logo-wrapper">
        <img className="logo" src={siteMeta.logoSrc} alt={siteMeta.logoText} />
      </Link>
      <p>{article.title}</p>
      <IconBar siteMeta={siteMeta} />
    </div>
  </div>
);

StickyHeader.propTypes = {
  /** The  */
  article: PropTypes.arrayOf.isRequired,
  /** The  */
  siteMeta: PropTypes.arrayOf.isRequired,
};

export default StickyHeader;
