import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<IconWrapper>` atom creates a wrapper around icons
 * imported from third party libraries.
 *
 */
const IconWrapper = ({ id, className, children }) => (
  <div id={id} className={`icon ${className}`}>
    {children}
  </div>
);

IconWrapper.propTypes = {
  /** The id for a specific icon wrapper */
  id: PropTypes.string,
  /** The className for a specific icon wrapper */
  className: PropTypes.string,
  /** The */
  children: PropTypes.string,
};

IconWrapper.defaultProps = {
  id: null,
  className: null,
  children: null,
};

export default IconWrapper;
