import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import ThreeUpArticles from '../ThreeUpArticles';

/**
 * ATOM: The `<ThreeUpPreviewSection>` creates __.
 *
 */
const ThreeUpPreviewSection = ({
  categoryArticles,
  isPopularPosts,
  popularArticlesTitle,
}) => (
  <div className="three-up-preview-section">
    <div className="three-up-preview-section-inner">
      {isPopularPosts && (
        <h2 className="three-up-preview-section-title">
          {popularArticlesTitle}
        </h2>
      )}
      {!isPopularPosts && (
        <h2 className="three-up-preview-section-title">Essential Oils</h2>
      )}
      {isPopularPosts && <hr className="three-up-preview-section-hr" />}
      {!isPopularPosts && (
        <p className="three-up-preview-section-description">
          Practical ways to incorporate essential oils into daily life. Plenty
          of tips and DIY suggestions for using EOs for health, wellness, and
          first aid purposes. As with everything preparedness related start slow
          and learn as you go.
        </p>
      )}
      <ThreeUpArticles articles={categoryArticles} />
      {!isPopularPosts && (
        <div className="more-in-category-button-wrapper">
          <Link to="/">
            <p className="primary-button more-in-category-button">
              More Essential Oils
            </p>
          </Link>
        </div>
      )}
    </div>
  </div>
);

ThreeUpPreviewSection.propTypes = {
  /** The */
  categoryArticles: PropTypes.arrayOf.isRequired,
  /** The */
  isPopularPosts: PropTypes.bool,
  /** The */
  popularArticlesTitle: PropTypes.string,
};

ThreeUpPreviewSection.defaultProps = {
  isPopularPosts: false,
  popularArticlesTitle: 'Popular Reads',
};

export default ThreeUpPreviewSection;
