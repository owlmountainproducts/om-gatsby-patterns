import React from 'react';

import ArticleListing from '../../molecules/ArticleListing';
import FullEmailMat from '../FullEmailMat';

/**
 * MOLECULE: The `<AboveTheFold>` creates __.
 *
 */
const AboveTheFold = () => (
  <div className="above-the-fold">
    <div className="above-the-fold-article-listing">
      <ArticleListing
        className="article_listing_featured"
        slug="/"
        title="The Best Survival Fishing Kits"
        imageFiles="https://cdn1.backdoorsurvival.com/app/uploads/2018/02/27085612/The-Best-Survival-Fishing-Kits-wide.png"
        imageText="best survival fishing kits"
        authorName="SurvivalWoman"
        lastUpdated="April 23, 2018"
        isFeaturedArticle
      />
    </div>
    <div className="above-the-fold-article-email-mat">
      <FullEmailMat
        header="Want to Know the Latest in Wellness Tech?"
        audienceNumber="7,400"
        audienceDescriptor="proactive wellness enthusiasts"
      />
    </div>
  </div>
);

export default AboveTheFold;
