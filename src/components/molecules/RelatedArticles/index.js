import React from 'react';
import PropTypes from 'prop-types';

import SmallArticleListing from '../../atoms/SmallArticleListing';

/**
 * ATOM: The `<RelatedArticles>` creates __.
 *
 */
const RelatedArticles = ({ posts, className }) => (
  <div className={`related-articles ${className}`}>
    <div className="related-articles-header-wrapper">
      <h3 className="related-articles-header">Related Articles</h3>
    </div>
    <div className="related-articles-list">
      {posts.map(post => (
        <div key={post.id} className="related-article-wrapper">
          <SmallArticleListing
            slug={post.slug}
            featuredMedia={post.featured_media}
            sourceUrl={post.featured_media.source_url}
            altText={post.featured_media.alt_text}
            title={post.title}
            metadesc={post.yoast.metadesc}
          />
        </div>
      ))}
    </div>
  </div>
);

RelatedArticles.propTypes = {
  /** The */
  posts: PropTypes.arrayOf.isRequired,
  /** The */
  className: PropTypes.string,
};

RelatedArticles.defaultProps = {
  className: '',
};

export default RelatedArticles;
