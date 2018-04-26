import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/**
 * MOLECULE: The `<H1Banner>` molecule creates a banner with an image background,
 * an H1 header and sub-header.
 * NOTE: imageSizes prop is sizes object from gatsby-image.
 * See https://www.gatsbyjs.org/packages/gatsby-image/#sizes-queries
 */
const H1Banner = ({
  header, imageFiles, imageText, children,
}) => (
  <div className="h1-banner">
    <Img className="h1-banner-img" sizes={imageFiles} alt={imageText} />
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
  imageFiles: PropTypes.object.isRequired,
  /** The p text in the banner */
  children: PropTypes.object,
  /** The p text in the banner */
  imageText: PropTypes.string.isRequired,
};

H1Banner.defaultProps = {
  children: null,
};

export default H1Banner;
