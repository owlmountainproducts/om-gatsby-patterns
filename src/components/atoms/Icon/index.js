import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<Icon>` atom creates __.
 *
 */
const Icon = ({ id, className, children }) => (
  <div id={id} className={`icon ${className}`}>
    {children}
  </div>
);

Icon.propTypes = {
  /** The */
  id: PropTypes.string,
  /** The */
  className: PropTypes.string,
  /** The */
  children: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  id: '',
  children: '',
};

export default Icon;
