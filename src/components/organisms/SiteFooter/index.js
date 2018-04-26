import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { getCopyrightDate } from '../../../utils';
import ListWithTitle from '../../atoms/ListWithTitle';

/**
 * ORGANISM: The `<SiteFooter>` creates __.
 *
 */
const SiteFooter = ({
  imageFiles,
  imageText,
  addressLine01,
  addressLine02,
  mainEmail,
  legalEntity,
  siteTitle,
  footer01Title,
  footer02Title,
  footer03Title,
  footer01Items,
  footer02Items,
  footer03Items,
  hasMedicalDisclaimer,
}) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-wrapper footer-wrapper-1">
        <ListWithTitle
          ClassName="footer-menu"
          title={footer01Title}
          listItems={footer01Items}
        />
      </div>
      <div className="footer-wrapper footer-wrapper-2">
        <ListWithTitle
          ClassName="footer-menu"
          title={footer02Title}
          listItems={footer02Items}
        />
      </div>
      <div className="footer-wrapper footer-wrapper-3">
        <ListWithTitle
          ClassName="footer-menu"
          title={footer03Title}
          listItems={footer03Items}
        />
      </div>
      <div className="footer-wrapper footer-wrapper-4">
        <Link to="/">
          <Img className="footer-logo" sizes={imageFiles} alt={imageText} />
        </Link>
        <p>
          {addressLine01}
          <br />
          {addressLine02}
          <br />Email Support: {mainEmail}
        </p>
      </div>
    </div>
    <div className="legal-line-wrapper">
      <div className="legal-line-inner">
        <p>
          © {getCopyrightDate()} &middot; All rights reserved. {siteTitle} is a
          service mark of {legalEntity}
          <br />
          <Link to="/terms-of-use/">Terms of Use</Link> |{' '}
          <Link to="/privacy-policy/">Privacy Policy</Link> |{' '}
          <Link to="/dmca/">DMCA</Link> |{' '}
          {hasMedicalDisclaimer && (
            <Link to="/medical-disclaimer/">Medical Disclaimer |</Link>
          )}
          <Link to="/affiliate-disclosure/"> Affiliate Disclosure</Link>
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
  imageFiles: PropTypes.shape.isRequired,
  /** The */
  imageText: PropTypes.string,
  /** The */
  addressLine01: PropTypes.string.isRequired,
  /** The */
  addressLine02: PropTypes.string.isRequired,
  /** The */
  mainEmail: PropTypes.string.isRequired,
  /** The */
  legalEntity: PropTypes.string.isRequired,
  /** The */
  siteTitle: PropTypes.string.isRequired,
  /** The */
  hasMedicalDisclaimer: PropTypes.bool,
  /** The */
  footer01Items: PropTypes.arrayOf.isRequired,
  /** The */
  footer02Items: PropTypes.arrayOf.isRequired,
  /** The */
  footer03Items: PropTypes.arrayOf.isRequired,
  /** The */
  footer01Title: PropTypes.arrayOf.isRequired,
  /** The */
  footer02Title: PropTypes.arrayOf.isRequired,
  /** The */
  footer03Title: PropTypes.arrayOf.isRequired,
};

SiteFooter.defaultProps = {
  imageText: 'website logo',
  hasMedicalDisclaimer: true,
};

export default SiteFooter;
