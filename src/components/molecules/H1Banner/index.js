import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<H1Banner>` atom creates a banner with an H1 header and p sub-header.
 * NOTE: imageSizes prop is sizes object from gatsby-image.
 * See https://www.gatsbyjs.org/packages/gatsby-image/#sizes-queries
 */
const H1Banner = ({
  header, imgSrc, children, imgAlt,
}) => (
  <div className="h1-banner">
    <img className="h1-banner-img" src={imgSrc} alt={imgAlt} />
    <div className="h1-banner-text-wrapper">
      <h1 className="h1-banner-header">{header}</h1>
      {children}
    </div>
  </div>
);

H1Banner.propTypes = {
  /** The header */
  header: PropTypes.string.isRequired,
  /** The background image */
  imgSrc: PropTypes.string.isRequired,
  /** The p text in the banner */
  children: PropTypes.string,
  /** The p text in the banner */
  imgAlt: PropTypes.string.isRequired,
};

H1Banner.defaultProps = {
  children: '',
};

export default H1Banner;
