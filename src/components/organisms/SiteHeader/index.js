import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as FontAwesome from 'react-icons/lib/fa';

import ActionButton from '../../atoms/ActionButton';
import CategoryNav from '../../atoms/CategoryNav';
import IconWrapper from '../../atoms/IconWrapper';
import MailchimpEmailInput from '../../molecules/MailchimpEmailInput';

/**
 * Organism: The `<SiteHeaderLayered>` organism creates ___.
 *
 */
class SiteHeaderLayered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
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
            <ActionButton className="naked-button" onClick={this.showMenu}>
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
        {this.state.showMenu ? (
          <div className="primary-nav-wrapper">
            <CategoryNav className="primary-nav" />
          </div>
        ) : null}
      </div>
    );
  }
}

SiteHeaderLayered.propTypes = {
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

SiteHeaderLayered.defaultProps = {
  alt: 'website logo',
  topNav: false,
};

export default SiteHeaderLayered;
