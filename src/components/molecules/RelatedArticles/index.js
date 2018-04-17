import React from 'react';
import PropTypes from 'prop-types';

import SmallArticleListing from '../../atoms/SmallArticleListing';

/**
 * ATOM: The `<RelatedArticles>` creates __.
 *
 */
const RelatedArticles = ({ posts }) => (
  <div>
    <div className="sidebar-related-posts-header-wrapper">
      <h3 className="sidebar-related-posts-header">Related Articles</h3>
    </div>
    <div className="sidebar-related-posts">
      {posts.map(post => (
        <div key={post.id}>
          <SmallArticleListing
            slug={post.slug}
            featuredMedia={post.featured_media}
            sourceUrl={post.featured_media.source_url}
            altText={post.featured_media.alt_text}
            title={post.title}
            yoast={post.yoast.metadesc}
          />
        </div>
      ))}
    </div>
  </div>
);

RelatedArticles.propTypes = {
  /** The */
  posts: PropTypes.arrayOf.isRequired,
};

export default RelatedArticles;
