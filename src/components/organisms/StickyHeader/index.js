import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import SocialShareButtons from '../../atoms/SocialShareButtons';

/**
 * ORGANISM: The `<StickyHeader>` organism creates a minimal header bar to stay sticky when
 * scrolling down a page.
 *
 */
const StickyHeader = ({ article, siteMeta }) => (
  <div className="sticky-header">
    <div className="sticky-header-inner">
      <Link to="/" className="logo-wrapper">
        <Img
          className="logo"
          sizes={siteMeta.logoSrc}
          alt={siteMeta.logoText}
        />
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
