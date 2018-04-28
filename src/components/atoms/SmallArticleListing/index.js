import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

/**
 * ATOM: The `<SmallArticleListing>` atom creates an abridged article listing.
 * Usually used for related articles.
 *
 */
const SmallArticleListing = ({
  id,
  className,
  slug,
  title,
  imageFiles,
  imageText,
  excerpt,
}) => (
  <Link
    id={id}
    className={`small-article-listing ${className}`}
    to={`/${slug}/`}
  >
    {imageFiles && <Img sizes={imageFiles} alt={imageText} />}
    <h4>{title}</h4>
    <p>{excerpt}</p>
  </Link>
);

SmallArticleListing.propTypes = {
  /** The id for a specific small article listing */
  id: PropTypes.string,
  /** The className for a specific small article listing */
  className: PropTypes.string,
  /** The  */
  slug: PropTypes.string.isRequired,
  /** The  */
  imageFiles: PropTypes.shape.isRequired,
  /** The  */
  imageText: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  excerpt: PropTypes.string,
};

SmallArticleListing.defaultProps = {
  id: null,
  className: null,
  excerpt: null,
};

export default SmallArticleListing;
