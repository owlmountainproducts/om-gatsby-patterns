import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as FontAwesome from 'react-icons/lib/fa';

import ActionButton from '../../atoms/ActionButton';
import CategoryNav from '../../atoms/CategoryNav';
import IconWrapper from '../../atoms/IconWrapper';
import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * Organism: The `<SiteHeader>` organism creates ___.
 *
 */
class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.navResponsiveMain = () => {
      const primaryNav = document.getElementById('nav-toggle-object');

      if (primaryNav.className === 'primary-nav-wrapper') {
        primaryNav.className = 'primary-nav-wrapper nav-responsive';
      } else {
        primaryNav.className = 'primary-nav-wrapper';
      }
    };
  }

  render() {
    return (
      <div className="site-header">
        {this.props.topNav && (
          <div className="top-nav-wrapper">
            <CategoryNav className="top-nav" />
          </div>
        )}
        <div className="header-center-wrapper">
          <div className="header-center-inner">
            <ActionButton
              className="naked-button"
              onClick={this.navResponsiveMain}
            >
              <IconWrapper id="menu-icon" className="site-header-icon">
                <FontAwesome.FaBars />
              </IconWrapper>
            </ActionButton>
            <Link to="/" className="logo-wrapper">
              <img
                className="logo"
                src={this.props.logoImg}
                alt={this.props.alt}
              />
            </Link>
            <div className="header-email-capture-wrapper">
              <MailchimpEmailInput
                className="single-line-input header-email-capture"
                mailchimpUrl={this.props.mailchimpUrl}
              />
            </div>
            <div className="header-right-icons">
              <a className="fb-icon-link" href={this.props.fbUrl}>
                <IconWrapper className="site-header-icon">
                  <FontAwesome.FaFacebook />
                </IconWrapper>
              </a>
              <a className="pinterest-icon-link" href={this.props.pinterestUrl}>
                <IconWrapper className="site-header-icon">
                  <FontAwesome.FaPinterestP />
                </IconWrapper>
              </a>
              <a className="youtube-icon-link" href={this.props.youtubeUrl}>
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
        <div
          id="nav-toggle-object"
          className="primary-nav-wrapper nav-responsive"
        >
          <CategoryNav className="primary-nav" />
        </div>
      </div>
    );
  }
}

SiteHeader.propTypes = {
  /** The */
  logoImg: PropTypes.string.isRequired,
  /** The */
  fbUrl: PropTypes.string.isRequired,
  /** The */
  pinterestUrl: PropTypes.string.isRequired,
  /** The */
  youtubeUrl: PropTypes.string.isRequired,
  /** The */
  mailchimpUrl: PropTypes.string.isRequired,
  /** The */
  alt: PropTypes.string,
  /** The */
  topNav: PropTypes.bool,
};

SiteHeader.defaultProps = {
  alt: 'website logo',
  topNav: false,
};

export default SiteHeader;
