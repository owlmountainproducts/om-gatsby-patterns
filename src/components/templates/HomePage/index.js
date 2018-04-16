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
const HomePage = ({ articles, categoryArticles }) => (
  <div>
    <SiteHeader />
    <div className="home-page">
      <H1Banner
        header="Reviews For Healthful Living"
        imgSrc="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/03/01133650/Diffuser-Aromatherapy-Aroma-Oil-Essential-Oils-1958549.jpg"
        imgAlt="kitchen scene"
      >
        <p className="h1-banner-children">
          this is a teriffic component this is a teriffic component this is a
          teriffic component this is a teriffic component this is a teriffic
          component this is a teriffic component
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
};

export default HomePage;
