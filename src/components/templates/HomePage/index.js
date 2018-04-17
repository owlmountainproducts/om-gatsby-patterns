import React from 'react';
import PropTypes from 'prop-types';

import SiteHeader from '../../organisms/SiteHeader';
import AboveTheFold from '../../organisms/AboveTheFold';
import ThreeUpPreviewSection from '../../organisms/ThreeUpPreviewSection';
import ActionWithImageBox from '../../organisms/ActionWithImageBox';
import SiteFooter from '../../organisms/SiteFooter';
import H1Banner from '../../molecules/H1Banner';

/**
 * MOLECULE: The `<HomePage>` creates __.
 *
 */
const HomePage = ({ articles, categoryArticles, navItems }) => (
  <div>
    <SiteHeader
      logoImg="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/04/13175200/wa_logo.png"
      alt="wellness appliances logo"
      navItems={navItems}
    />
    <div className="home-page">
      <H1Banner
        header="Reviews For Living Well."
        imgSrc="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/03/19001418/Kitchen.jpg"
        imgAlt="kitchen scene"
      >
        <p className="h1-banner-children">
          We believe a healthy life is a happy life. We actively research and
          review products that contribute to healthful living. About Us and Our
          Mission.
        </p>
      </H1Banner>
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
    </div>
    <SiteFooter />
  </div>
);

HomePage.propTypes = {
  /** The  */
  articles: PropTypes.arrayOf.isRequired,
  /** The  */
  categoryArticles: PropTypes.arrayOf.isRequired,
  /** The  */
  navItems: PropTypes.arrayOf.isRequired,
};

export default HomePage;
