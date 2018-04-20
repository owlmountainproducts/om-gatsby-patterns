import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as FontAwesome from 'react-icons/lib/fa';

import ActionButton from '../../atoms/ActionButton';
import CategoryNav from '../../atoms/CategoryNav';
import IconWrapper from '../../atoms/IconWrapper';
import IconBar from '../../molecules/IconBar';
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
            <CategoryNav
              className="top-nav"
              navItems={this.props.topNavItems}
            />
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
                src={this.props.siteMeta.logoSrc}
                alt={this.props.siteMeta.logoText}
              />
            </Link>
            <div className="header-email-capture-wrapper">
              <MailchimpEmailInput
                className="single-line-input header-email-capture"
                mailchimpUrl={this.props.mailchimpUrl}
              />
            </div>
            <IconBar siteMeta={this.props.siteMeta} />
          </div>
        </div>
        <div
          id="nav-toggle-object"
          className="primary-nav-wrapper nav-responsive"
        >
          <CategoryNav
            className="primary-nav"
            navItems={this.props.primaryNavItems}
          />
        </div>
      </div>
    );
  }
}

SiteHeader.propTypes = {
  /** The */
  mailchimpUrl: PropTypes.string.isRequired,
  /** The  */
  siteMeta: PropTypes.arrayOf.isRequired,
  /** The */
  topNav: PropTypes.bool,
  /** The */
  topNavItems: PropTypes.arrayOf.isRequired,
  /** The */
  primaryNavItems: PropTypes.arrayOf.isRequired,
};

SiteHeader.defaultProps = {
  topNav: false,
};

export default SiteHeader;
