import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/**
 * ATOM: The `<AffiliateDisclosure>` atom creates an Affiliate Disclosure block.
 * The disclosure text will remain the same from site to site.
 */
const AffiliateDisclosure = ({ imageFiles, imageText }) => (
  <section className="affiliate-disclosure-wrapper">
    <div className="disclosure-img">
      <Img sizes={imageFiles} alt={imageText} />
    </div>
    <div className="disclosure-body">
      <h3 className="disclosure-title">Disclosure:</h3>
      <p className="disclosure-text">
        Some of the links in this post may be from our sponsors or advertising
        partners who we take great care to select. We’re letting you know
        because it’s the right thing to do.
      </p>
    </div>
  </section>
);

AffiliateDisclosure.propTypes = {
  /** The Logo Img that gets inserted into disclosure. */
  imageFiles: PropTypes.shape.isRequired,
  /** The */
  imageText: PropTypes.string,
};

AffiliateDisclosure.defaultProps = {
  imageText: 'website logo',
};

export default AffiliateDisclosure;
