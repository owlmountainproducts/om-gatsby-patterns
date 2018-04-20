import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<IconWrapper>` atom creates __.
 *
 */
const IconWrapper = ({ id, className, children }) => (
  <div id={id} className={`icon ${className}`}>
    {children}
  </div>
);

IconWrapper.propTypes = {
  /** The */
  id: PropTypes.string,
  /** The */
  className: PropTypes.string,
  /** The */
  children: PropTypes.string,
};

IconWrapper.defaultProps = {
  className: null,
  id: null,
  children: null,
};

export default IconWrapper;
