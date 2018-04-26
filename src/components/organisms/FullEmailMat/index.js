import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * ORGANISM: The `<FullEmailMat>` creates __.
 *
 */
const FullEmailMat = ({ header, audienceNumber, audienceDescriptor }) => (
  <div className="full-email-mat">
    <h3 className="full-email-mat-header">{header}</h3>
    <p className="full-email-mat-cta-text">SIGN UP FOR FREE UPDATES...</p>
    <MailchimpEmailInput
      className="double-line-input full-email-mat-email-input"
      mailchimpUrl="https://wellnessappliances.us2.list-manage.com/subscribe/post?u=10dbfb95b10b0055960e52187&amp;id=143b2e5389"
    />
    <p className="full-email-mat-privacy-link-wrapper">
      <Link to="/privacy-policy/" className="full-email-mat-privacy-link">
        Privacy Policy
      </Link>
    </p>
    <div className="full-email-mat-audience-callout">
      <p className="full-email-mat-audience-number">{audienceNumber}+</p>
      <p className="full-email-mat-audience-descriptor">{audienceDescriptor}</p>
    </div>
  </div>
);

FullEmailMat.propTypes = {
  /** The  */
  header: PropTypes.string.isRequired,
  /** The  */
  audienceNumber: PropTypes.string.isRequired,
  /** The  */
  audienceDescriptor: PropTypes.string.isRequired,
};

export default FullEmailMat;
