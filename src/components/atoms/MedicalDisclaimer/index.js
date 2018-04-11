import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

/**
 * MOLECULE: The `<MedicalDisclaimer>` creates a medical disclaimer block.
 *
 */
const MedicalDisclaimer = ({ logoIcon }) => (
  <section className="medical-disclaimer-wrapper">
    <div className="disclosure-img">
      <img src={logoIcon} />
    </div>
    <div className="disclosure-body">
      <h3 className="disclosure-title">No Medical Advice</h3>
      <p className="disclosure-text">
        IMPORTANT: We wrote this article to be helpful with educational and
        informational purposes only. The information in this article is not
        meant to convey medical advice and does not constitute the practice of
        medicine. You should not rely on this information as a substitute for,
        nor does it replace, qualified medical advice from a professional. See
        our full <a href="/medical-disclaimer/">medical disclosure</a> for more.
      </p>
    </div>
  </section>
);

MedicalDisclaimer.propTypes = {
  /** The Logo Img that gets inserted into disclaimer. */
  logoIcon: PropTypes.string.isRequired,
};

export default MedicalDisclaimer;
