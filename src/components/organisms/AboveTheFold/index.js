import React from 'react';
import PropTypes from 'prop-types';

import ArticleListing from '../../molecules/ArticleListing';
import FullEmailMat from '../FullEmailMat';

/**
 * ORGANISM: The `<AboveTheFold>` organism combines the featured article with the full email mat.
 * Typically used on overview or landing pages.
 *
 */
const AboveTheFold = ({
  featuredArticle,
  emailMatHeader,
  emailMatAudienceNumber,
  emailMatAudienceDescriptor,
}) => (
  <div className="above-the-fold">
    <div className="above-the-fold-article-listing">
      <ArticleListing
        className="article_listing_featured"
        slug={featuredArticle.node.slug}
        title={featuredArticle.node.title}
        imageFiles={
          featuredArticle.node.featured_media.localFile.childImageSharp.sizes
        }
        imageText={featuredArticle.node.featured_media.alt_text}
        authorName={featuredArticle.node.author.name}
        lastUpdated={featuredArticle.node.date}
        isFeaturedArticle
      />
    </div>
    <div className="above-the-fold-article-email-mat">
      <FullEmailMat
        header={emailMatHeader}
        audienceNumber={emailMatAudienceNumber}
        audienceDescriptor={emailMatAudienceDescriptor}
      />
    </div>
  </div>
);

AboveTheFold.propTypes = {
  /** The */
  featuredArticle: PropTypes.arrayOf.isRequired,
  /** The */
  emailMatHeader: PropTypes.arrayOf.isRequired,
  /** The */
  emailMatAudienceNumber: PropTypes.arrayOf.isRequired,
  /** The */
  emailMatAudienceDescriptor: PropTypes.arrayOf.isRequired,
};

export default AboveTheFold;
