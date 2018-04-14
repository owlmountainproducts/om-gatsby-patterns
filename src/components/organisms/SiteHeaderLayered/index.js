import React from 'react';
import PropTypes from 'prop-types';

import CategoryNav from '../../atoms/CategoryNav';
import SiteHeaderCenter from '../SiteHeaderCenter';

/**
 * Organism: The `<SiteHeaderLayered>` organism creates ___.
 *
 */
const SiteHeaderLayered = ({ topNav }) => (
  <div className="site-header">
    {topNav && (
      <div className="top-nav-wrapper">
        <CategoryNav className="top-nav" />
      </div>
    )}
    <SiteHeaderCenter
      logo="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/03/13174949/Artboardg.png"
      alt="website-logo"
      fbUrl="https://www.facebook.com/BestEssentialOilDiffuser/"
      pinterestUrl="https://www.pinterest.com/wellnessappliances/"
      youtubeUrl="https://www.youtube.com/channel/UCV5qdCOsc4VlfOfPWQYS-LQ"
      mailchimpUrl="https://wellnessappliances.us2.list-manage.com/subscribe/post?u=10dbfb95b10b0055960e52187&amp;id=143b2e5389"
    />
    <div className="primary-nav-wrapper">
      <CategoryNav className="primary-nav" />
    </div>
  </div>
);

SiteHeaderLayered.propTypes = {
  /** The */
  topNav: PropTypes.bool,
};

SiteHeaderLayered.defaultProps = {
  topNav: false,
};

export default SiteHeaderLayered;
