import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import ThreeUpArticles from '../ThreeUpArticles';

/**
 * ORGANISM: The `<ThreeUpPreviewSection>` creates __.
 *
 */
const ThreeUpPreviewSection = ({
  articlesList,
  isPopularPosts,
  popularArticlesHeader,
}) => (
  <div className="three-up-preview-section">
    <div className="three-up-preview-section-inner">
      {isPopularPosts && (
        <h2 className="three-up-preview-section-title">
          {popularArticlesHeader}
        </h2>
      )}
      {!isPopularPosts && (
        <h2 className="three-up-preview-section-title">
          {articlesList[0].node.categories[0].name}
        </h2>
      )}
      {isPopularPosts && <hr className="three-up-preview-section-hr" />}
      {!isPopularPosts && (
        <p className="three-up-preview-section-description">
          {articlesList[0].node.categories[0].description}
        </p>
      )}
      <ThreeUpArticles articles={articlesList} />
      {!isPopularPosts && (
        <div className="more-in-category-button-wrapper">
          <Link to={`/category/${articlesList[0].node.categories[0].slug}/`}>
            <p className="primary-button more-in-category-button">
              More {articlesList[0].node.categories[0].name}
            </p>
          </Link>
        </div>
      )}
    </div>
  </div>
);

ThreeUpPreviewSection.propTypes = {
  /** The */
  articlesList: PropTypes.arrayOf.isRequired,
  /** The */
  isPopularPosts: PropTypes.bool,
  /** The */
  popularArticlesHeader: PropTypes.string,
};

ThreeUpPreviewSection.defaultProps = {
  isPopularPosts: false,
  popularArticlesHeader: 'Popular Reads',
};

export default ThreeUpPreviewSection;
