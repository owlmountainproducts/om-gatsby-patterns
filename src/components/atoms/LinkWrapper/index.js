import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<LinkWrapper>` atom creates a link wrapper that
 * acts either like an internal or external link.
 *
 */
const LinkWrapper = ({
  internalUrl, href, id, className, children, text,
}) => (
  <div className="link-wrapper">
    {internalUrl && (
      <Link to={href} id={id} className={className}>
        {children || text}
      </Link>
    )}
    {!internalUrl && (
      <a href={href} id={id} className={className}>
        {children || text}
      </a>
    )}
  </div>
);

LinkWrapper.propTypes = {
  /** The */
  internalUrl: PropTypes.bool.isRequired,
  /** The */
  href: PropTypes.string.isRequired,
  /** The */
  id: PropTypes.string,
  /** The classname on the link. Use '.button' to get button styling */
  className: PropTypes.string,
  /** The */
  children: PropTypes.string,
  /** The */
  text: PropTypes.string,
};

LinkWrapper.defaultProps = {
  className: '',
  id: '',
  children: '',
  text: '',
};

export default LinkWrapper;
