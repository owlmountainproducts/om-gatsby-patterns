import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<SmallArticleListing>` creates __.
 *
 */
const SmallArticleListing = ({
  id,
  className,
  slug,
  title,
  featuredMedia,
  src,
  imageText,
  excerpt,
}) => (
  <Link
    id={id}
    className={`small-article-listing ${className}`}
    to={`/${slug}/`}
  >
    {featuredMedia && <img src={src} alt={imageText} />}
    <h4>{title}</h4>
    <p>{excerpt}</p>
  </Link>
);

SmallArticleListing.propTypes = {
  /** The  */
  slug: PropTypes.string.isRequired,
  /** The  */
  featuredMedia: PropTypes.bool,
  /** The  */
  src: PropTypes.string.isRequired,
  /** The  */
  imageText: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  excerpt: PropTypes.string,
  /** The  */
  className: PropTypes.string,
  /** The  */
  id: PropTypes.string,
};

SmallArticleListing.defaultProps = {
  featuredMedia: false,
  excerpt: null,
  className: null,
  id: null,
};

export default SmallArticleListing;
