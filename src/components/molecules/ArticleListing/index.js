import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import EntryMeta from '../../atoms/EntryMeta';

/**
 * MOLECULE: The `<ArticleListing>` creates __.
 * TODO: Use gatsby-image with all images, remove switch logic
 *
 */
const ArticleListing = ({
  slug,
  title,
  imageFiles,
  imageText,
  authorName,
  lastUpdated,
  excerpt,
  useGatsbyImage,
  className,
  featuredArticle,
}) => (
  <article className={`article-listing ${className}`}>
    <div className="article-listing-image-wrapper">
      {useGatsbyImage ? (
        <Link to={`/${slug}/`}>
          <Img sizes={imageFiles} alt={imageText} />
        </Link>
      ) : (
        <Link to={`/${slug}/`}>
          <img src={imageFiles} alt={imageText} />
        </Link>
      )}
    </div>
    <div className="article-listing-text">
      {featuredArticle && (
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
  slug: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  imageFiles: PropTypes.string.isRequired,
  /** The  */
  imageText: PropTypes.string.isRequired,
  /** The  */
  authorName: PropTypes.string.isRequired,
  /** The  */
  lastUpdated: PropTypes.string.isRequired,
  /** The  */
  useGatsbyImage: PropTypes.bool.isRequired,
  /** The  */
  excerpt: PropTypes.string,
  /** The  */
  className: PropTypes.string,
  /** The  */
  featuredArticle: PropTypes.bool,
};

ArticleListing.defaultProps = {
  className: '',
  excerpt: '',
  featuredArticle: false,
};

export default ArticleListing;