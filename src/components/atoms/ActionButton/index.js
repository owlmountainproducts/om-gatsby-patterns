import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

/**
 * ATOM: The `<ActionButton>` atom creates button for actions on forms and things.
 *
 */
const ActionButton = ({id, className, buttonText, type, disabled, children, text}) => (
  <button id="{id}" className="action-button {className}" type='{type}' disabled={disabled}>
    { children || text }
  </button>
);


ActionButton.propTypes = {
    /** The */
    id: PropTypes.string,
    /** The */
    className: PropTypes.string,
    /** The */
    children: PropTypes.string,
    /** The */
    type: PropTypes.string,
    /** The */
    disabled: PropTypes.bool
};

export default ActionButton;