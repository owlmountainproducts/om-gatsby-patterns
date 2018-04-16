import React from 'react';
import PropTypes from 'prop-types';

import SiteHeader from '../../organisms/SiteHeader';
import AboveTheFold from '../../organisms/AboveTheFold';
import ThreeUpPreviewSection from '../../organisms/ThreeUpPreviewSection';
import ActionWithImageBox from '../../organisms/ActionWithImageBox';
import SiteFooter from '../../organisms/SiteFooter';

/**
 * MOLECULE: The `<HomePage>` creates __.
 *
 */
const HomePage = ({ articles, categoryArticles }) => (
  <div>
    <SiteHeader />
    <AboveTheFold />
    <ThreeUpPreviewSection categoryArticles={articles} isPopularPosts />
    <ActionWithImageBox
      header="We follow the cutting edge of wellness technology for the home and office."
      subheader="Let us keep you informed too.."
      img="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/03/19000725/livingroom.jpg"
      alt="livingroom-scene"
    />
    <ThreeUpPreviewSection categoryArticles={categoryArticles} />
    <ThreeUpPreviewSection categoryArticles={categoryArticles} />
    <ThreeUpPreviewSection categoryArticles={categoryArticles} />
    <SiteFooter />
  </div>
);

HomePage.propTypes = {
  /** The  */
  articles: PropTypes.arrayOf.isRequired,
  /** The  */
  categoryArticles: PropTypes.arrayOf.isRequired,
};

export default HomePage;
