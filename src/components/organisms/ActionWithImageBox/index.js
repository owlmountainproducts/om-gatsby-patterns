import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * ORGANISM: The `<ActionWithImageBox>` organism creates ___.
 *
 */
const ActionWithImageBox = ({
  header,
  subheader,
  imageText,
  imageFiles,
  mailchimpUrl,
}) => (
  <div className="action-with-image-box">
    <div className="awib-text-wrapper">
      <div className="awib-text-inner">
        <h3 className="awib-header">{header}</h3>
        <p className="awib-subheader">{subheader}</p>
        <MailchimpEmailInput
          className="single-line-input"
          mailchimpUrl={mailchimpUrl}
        />
      </div>
    </div>
    <Img className="awib-img" sizes={imageFiles} alt={imageText} />
  </div>
);

ActionWithImageBox.propTypes = {
  /** The */
  header: PropTypes.string.isRequired,
  /** The */
  subheader: PropTypes.string,
  /** The */
  imageFiles: PropTypes.shape.isRequired,
  /** The */
  imageText: PropTypes.string.isRequired,
  /** The */
  mailchimpUrl: PropTypes.string.isRequired,
};

ActionWithImageBox.defaultProps = {
  subheader: null,
};

export default ActionWithImageBox;
