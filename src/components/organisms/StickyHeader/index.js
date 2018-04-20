import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import SocialShareButtons from '../../atoms/SocialShareButtons';

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
      <p className="sticky-header-article-title">{article.title}</p>
      <SocialShareButtons
        className="top-social-buttons"
        title={article.title}
        url={article.slug}
        featuredImage={article.featured_media.source_url}
      />
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
