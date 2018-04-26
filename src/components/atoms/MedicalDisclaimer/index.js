import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

/**
 * ATOM: The `<MedicalDisclaimer>` atom creates a medical disclaimer block.
 * The disclosure text will remain the same from site to site.
 *
 */
const MedicalDisclaimer = ({ imageFiles, imageText }) => (
  <section className="medical-disclaimer-wrapper">
    <div className="disclosure-img">
      <Img sizes={imageFiles} alt={imageText} />
    </div>
    <div className="disclosure-body">
      <h3 className="disclosure-title">No Medical Advice</h3>
      <p className="disclosure-text">
        IMPORTANT: We wrote this article to be helpful with educational and
        informational purposes only. The information in this article is not
        meant to convey medical advice and does not constitute the practice of
        medicine. You should not rely on this information as a substitute for,
        nor does it replace, qualified medical advice from a professional. See
        our full <Link to="/medical-disclaimer/">medical disclosure</Link> for
        more.
      </p>
    </div>
  </section>
);

MedicalDisclaimer.propTypes = {
  /** The Logo Img that gets inserted into disclaimer. */
  imageFiles: PropTypes.object.isRequired,
  /** The */
  imageText: PropTypes.string,
};

MedicalDisclaimer.defaultProps = {
  imageText: 'website logo',
};

export default MedicalDisclaimer;
