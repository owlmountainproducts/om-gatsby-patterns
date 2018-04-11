import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types';

/**
 * ATOM: The `<Icon>` atom creates __.
 *
 */
const Icon = ({id, className, specificIcon, children }) => (
  <div id={id} className={`icon ${className}`}>
    {children}
  </div>
)

Icon.propTypes = {
    /** The */
    id: PropTypes.string,
    /** The */
    className: PropTypes.string
};

export default Icon;
