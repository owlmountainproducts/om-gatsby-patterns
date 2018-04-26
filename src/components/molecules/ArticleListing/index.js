import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import EntryMeta from '../../atoms/EntryMeta';

/**
 * MOLECULE: The `<ArticleListing>` molecule creates an article
 * listing with featured image, author, date, title and excerpt.
 *
 */
const ArticleListing = ({
  id,
  className,
  slug,
  title,
  imageFiles,
  imageText,
  authorName,
  lastUpdated,
  excerpt,
  isFeaturedArticle,
}) => (
  <article id={id} className={`article-listing ${className}`}>
    <div className="article-listing-image-wrapper">
      <Link to="/">
        <Img sizes={imageFiles} alt={imageText} />
      </Link>
    </div>
    <div className="article-listing-text">
      {isFeaturedArticle && (
        <p className="featured-article-tag">Featured Article</p>
      )}
      <h3 className="article-listing-title">
        <Link
          className="article-listing-title-link"
          to={`/${slug}/`}
          rel="bookmark"
        >
          {title}
        </Link>
      </h3>
      <EntryMeta
        author={authorName}
        lastUpdated={lastUpdated}
        includeLink={false}
      />
      <p>{excerpt}</p>
    </div>
  </article>
);

ArticleListing.propTypes = {
  /** The  */
  id: PropTypes.bool,
  /** The  */
  className: PropTypes.string,
  /** The  */
  slug: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  imageFiles: PropTypes.object.isRequired,
  /** The  */
  imageText: PropTypes.string.isRequired,
  /** The  */
  authorName: PropTypes.string.isRequired,
  /** The  */
  lastUpdated: PropTypes.string.isRequired,
  /** The  */
  excerpt: PropTypes.string,
  /** The  */
  isFeaturedArticle: PropTypes.bool,
};

ArticleListing.defaultProps = {
  id: null,
  className: null,
  excerpt: null,
  isFeaturedArticle: false,
};

export default ArticleListing;
