import React from 'react';
import PropTypes from 'prop-types';

import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * ATOM: The `<ActionWithImageBox>` atom creates ___.
 *
 */
const ActionWithImageBox = ({
  header, subheader, alt, img,
}) => (
  <div className="action-with-image-box">
    <div className="awib-text-wrapper">
      <div className="awib-text-inner">
        <h3 className="awib-header">{header}</h3>
        <p className="awib-subheader">{subheader}</p>
        <MailchimpEmailInput
          className="single-line-input"
          mailchimpUrl="https://wellnessappliances.us2.list-manage.com/subscribe/post?u=10dbfb95b10b0055960e52187&amp;id=143b2e5389"
        />
      </div>
    </div>
    <img src={img} className="awib-img" alt={alt} />
  </div>
);

ActionWithImageBox.propTypes = {
  /** The */
  header: PropTypes.string.isRequired,
  /** The */
  subheader: PropTypes.string,
  /** The */
  img: PropTypes.string.isRequired,
  /** The */
  alt: PropTypes.string.isRequired,
};

ActionWithImageBox.defaultProps = {
  subheader: '',
};

export default ActionWithImageBox;
