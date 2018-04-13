import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import ListWithTitle from '../../atoms/ListWithTitle';

/**
 * ATOM: The `<SiteFooter>` creates __.
 *
 */
const SiteFooter = ({
  logoimg,
  alt,
  addressLine01,
  addressLine02,
  mainEmail,
  copyrightYear,
  legalEntity,
  siteTitle,
  hasMedicalDisclaimer,
}) => (
  <footer>
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-wrapper-1">
          <ListWithTitle ClassName="footer-menu" header="RESOURCES" />
        </div>
        <div className="footer-wrapper-2">
          <ListWithTitle ClassName="footer-menu" header="POPULAR READS" />
        </div>
        <div className="footer-wrapper-3">
          <ListWithTitle ClassName="footer-menu" header="CATEGORIES" />
        </div>
        <div className="footer-wrapper-4">
          <Link to="/">
            <img className="footer-logo" src={logoimg} alt={alt} />
          </Link>
          <p>
            {addressLine01}
            <br />
            {addressLine02}
            <br />Email Support: {mainEmail}
          </p>
        </div>
      </div>
    </div>
    <div className="legal-line-wrapper">
      <div className="legal-line">
        <p>
          Copyright {copyrightYear} {legalEntity} &middot; All rights reserved.{' '}
          {siteTitle} is a service mark of {legalEntity}
          <br />
          <Link to="/terms-of-use/">Terms of Use</Link> |{' '}
          <Link to="/privacy-policy/">Privacy Policy</Link> |{' '}
          <Link to="/dmca/">DMCA</Link> |{' '}
          {hasMedicalDisclaimer && (
            <Link to="/medical-disclaimer/">Medical Disclaimer | </Link>
          )}
          <Link to="/affiliate-disclosure/">Affiliate Disclosure</Link>
        </p>
        <p>
          The information presented here is to be helpful to our readers for
          general educational purposes only. This website contains links to our
          affiliate and advertising partners who we take great care to select,
          including the Amazon Services LLC Associates Program. Amazon and the
          Amazon logo are trademarks of Amazon.com, Inc., or its affiliates.
        </p>
      </div>
    </div>
  </footer>
);

SiteFooter.propTypes = {
  /** The */
  logoimg: PropTypes.string.isRequired,
  /** The */
  alt: PropTypes.string,
  /** The */
  addressLine01: PropTypes.string.isRequired,
  /** The */
  addressLine02: PropTypes.string.isRequired,
  /** The */
  mainEmail: PropTypes.string.isRequired,
  /** The */
  copyrightYear: PropTypes.number.isRequired,
  /** The */
  legalEntity: PropTypes.string.isRequired,
  /** The */
  siteTitle: PropTypes.string.isRequired,
  /** The */
  hasMedicalDisclaimer: PropTypes.bool,
};

SiteFooter.defaultProps = {
  alt: 'website logo',
  hasMedicalDisclaimer: true,
};

export default SiteFooter;
