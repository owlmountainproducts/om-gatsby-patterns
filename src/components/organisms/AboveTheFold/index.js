import React from 'react';
import PropTypes from 'prop-types';

import ArticleListing from '../../molecules/ArticleListing';
import FullEmailMat from '../FullEmailMat';

/**
 * MOLECULE: The `<AboveTheFold>` creates __.
 *
 */
const AboveTheFold = ({ featuredArticle, emailMat }) => (
  <div className="above-the-fold">
    <div className="above-the-fold-article-listing">
      <ArticleListing
        className="article_listing_featured"
        slug={featuredArticle.node.slug}
        title={featuredArticle.node.title}
        imageFiles={featuredArticle.node.featured_media.source_url}
        imageText={featuredArticle.node.featured_media.alt_text}
        authorName={featuredArticle.node.author.name}
        lastUpdated={featuredArticle.node.date}
        isFeaturedArticle
      />
    </div>
    <div className="above-the-fold-article-email-mat">
      <FullEmailMat
        header={emailMat.header}
        audienceNumber={emailMat.audienceNumber}
        audienceDescriptor={emailMat.audienceDescriptor}
      />
    </div>
  </div>
);

AboveTheFold.propTypes = {
  /** The */
  featuredArticle: PropTypes.arrayOf.isRequired,
  /** The */
  emailMat: PropTypes.arrayOf.isRequired,
};

export default AboveTheFold;
