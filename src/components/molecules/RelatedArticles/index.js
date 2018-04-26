import React from 'react';
import PropTypes from 'prop-types';

import SmallArticleListing from '../../atoms/SmallArticleListing';

/**
 * MOLECULE: The `<RelatedArticles>` molecule creates a looping of
 * Small Article Listing components. Used for Related Articles.
 *
 */
const RelatedArticles = ({ relatedArticles, className }) => (
  <div className={`related-articles ${className}`}>
    <div className="related-articles-header-wrapper">
      <h3 className="related-articles-header">Related Articles</h3>
    </div>
    <div className="related-articles-list">
      {relatedArticles.map(relatedArticle => (
        <div key={relatedArticle.id} className="related-article-wrapper">
          <SmallArticleListing
            slug={relatedArticle.slug}
            featuredMedia={relatedArticle.featured_media}
            src={relatedArticle.featured_media.source_url}
            imageText={relatedArticle.featured_media.alt_text}
            title={relatedArticle.title}
            excerpt={relatedArticle.yoast.metadesc}
          />
        </div>
      ))}
    </div>
  </div>
);

RelatedArticles.propTypes = {
  /** The */
  relatedArticles: PropTypes.arrayOf.isRequired,
  /** The */
  className: PropTypes.string,
};

RelatedArticles.defaultProps = {
  className: null,
};

export default RelatedArticles;
