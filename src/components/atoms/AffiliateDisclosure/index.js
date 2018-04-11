import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<AffiliateDisclosure>` atom creates an Affiliate Disclosure block.
 */
const AffiliateDisclosure = ({ logoIcon, alt }) => (
  <section className="affiliate-disclosure-wrapper">
    <div className="disclosure-img">
      <img src={logoIcon} alt={alt} />
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
  logoIcon: PropTypes.string.isRequired,
  /** The */
  alt: PropTypes.string,
};

AffiliateDisclosure.defaultProps = {
  alt: 'website logo',
};

export default AffiliateDisclosure;
