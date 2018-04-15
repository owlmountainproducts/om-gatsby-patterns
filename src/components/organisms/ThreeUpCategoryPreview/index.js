import React from 'react';
import Link from 'gatsby-link';

import ThreeUpArticles from '../ThreeUpArticles';

/**
 * ATOM: The `<ThreeUpCategoryPreview>` creates __.
 *
 */
const ThreeUpCategoryPreview = () => (
  <div className="three-up-category-prev">
    <div className="three-up-category-prev-inner">
      <h2 className="three-up-category-prev-title">Essential Oils</h2>
      <p className="three-up-category-prev-description">
        Practical ways to incorporate essential oils into daily life. Plenty of
        tips and DIY suggestions for using EOs for health, wellness, and first
        aid purposes. As with everything preparedness related, start slow and
        learn as you go.
      </p>
      <ThreeUpArticles />
      <div className="more-in-category-button-wrapper">
        <Link to="/">
          <p className="primary-button more-in-category-button">
            More Essential Oils
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default ThreeUpCategoryPreview;
