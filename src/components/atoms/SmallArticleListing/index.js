import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<SmallArticleListing>` creates __.
 *
 */
const SmallArticleListing = ({
  slug,
  featuredMedia,
  sourceUrl,
  altText,
  title,
  metadesc,
  className,
}) => (
  <Link to={`/${slug}/`} className={`small-article-listing ${className}`}>
    {featuredMedia && <img src={sourceUrl} alt={altText} />}
    <h4>{title}</h4>
    <p>{metadesc}</p>
  </Link>
);

SmallArticleListing.propTypes = {
  /** The  */
  slug: PropTypes.string.isRequired,
  /** The  */
  featuredMedia: PropTypes.bool,
  /** The  */
  sourceUrl: PropTypes.string.isRequired,
  /** The  */
  altText: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  metadesc: PropTypes.string,
  /** The  */
  className: PropTypes.string,
};

SmallArticleListing.defaultProps = {
  featuredMedia: false,
  metadesc: '',
  className: '',
};

export default SmallArticleListing;
