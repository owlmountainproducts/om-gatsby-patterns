import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as FontAwesome from 'react-icons/lib/fa';

import IconWrapper from '../../atoms/IconWrapper';
import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * MOLECULE: The `<SiteHeaderCenter>` molecule creates ___.
 *
 */
const SiteHeaderCenter = ({
  alt, logo, fbUrl, pinterestUrl, youtubeUrl,
}) => (
  <div className="header-wrapper">
    <IconWrapper id="menu-icon" className="site-header-icon">
      <FontAwesome.FaBars />
    </IconWrapper>
    <Link to="/">
      <img className="logo" src={logo} alt={alt} />
    </Link>
    <MailchimpEmailInput
      className="single-line-input"
      mailchimpUrl="https://wellnessappliances.us2.list-manage.com/subscribe/post?u=10dbfb95b10b0055960e52187&amp;id=143b2e5389"
    />
    <div className="header-right-icons">
      <div className="header-search">
        <a className="fb-icon-link" href={fbUrl}>
          <IconWrapper className="site-header-icon">
            <FontAwesome.FaFacebook />
          </IconWrapper>
        </a>
        <a className="pinterest-icon-link" href={pinterestUrl}>
          <IconWrapper className="site-header-icon">
            <FontAwesome.FaPinterestP />
          </IconWrapper>
        </a>
        <a className="youtube-icon-link" href={youtubeUrl}>
          <IconWrapper className="site-header-icon">
            <FontAwesome.FaYoutubePlay />
          </IconWrapper>
        </a>
        <a className="search-icon-link" href="/search/">
          <IconWrapper className="site-header-icon">
            <FontAwesome.FaSearch />
          </IconWrapper>
        </a>
      </div>
    </div>
  </div>
);

SiteHeaderCenter.propTypes = {
  /** The */
  alt: PropTypes.string.isRequired,
  /** The */
  logo: PropTypes.string.isRequired,
  /** The */
  fbUrl: PropTypes.string.isRequired,
  /** The */
  pinterestUrl: PropTypes.string.isRequired,
  /** The */
  youtubeUrl: PropTypes.string.isRequired,
};

export default SiteHeaderCenter;
