import React from 'react';
import PropTypes from 'prop-types';

import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * ATOM: The `<ActionWithImageBox>` atom creates ___.
 *
 */
const ActionWithImageBox = ({ header, subheader }) => (
  <div className="action-with-image-box">
    <div className="awib-text-wrapper">
      <div className="text-and-image-text-inner">
        <h3 className="text-and-image-callout">{header}</h3>
        <p className="text-and-image-subcallout">{subheader}</p>
        <div className="text-and-image-cta-row">
          <MailchimpEmailInput className="single-line-input" />
        </div>
      </div>
    </div>
    <div className="awib-img-wrapper" />
  </div>
);

ActionWithImageBox.propTypes = {
  /** The */
  header: PropTypes.string.isRequired,
  /** The */
  subheader: PropTypes.string,
};

ActionWithImageBox.defaultProps = {
  subheader: '',
};

export default ActionWithImageBox;
