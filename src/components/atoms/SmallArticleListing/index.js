import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

/**
 * ATOM: The `<SmallArticleListing>` creates __.
 *
 */
const SmallArticleListing = ({ post }) => (
  <article>
    <Link to={`/${post.slug}/`} className="sidebar-related-post">
      {post.featured_media && (
        <img
          src={post.featured_media.source_url}
          alt={post.featured_media.alt_text}
        />
      )}
      <h4>{post.title}</h4>
      <p>{post.yoast.metadesc}</p>
    </Link>
  </article>
);

SmallArticleListing.propTypes = {
  /** The  */
  post: PropTypes.arrayOf.isRequired,
};

export default SmallArticleListing;
