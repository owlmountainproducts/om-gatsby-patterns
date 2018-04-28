import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<ActionButton>` atom creates a button element for actions on forms and things.
 *
 */
const ActionButton = ({
  id, className, text, type, children, onClick,
}) => (
  <button
    id={id}
    className={`action-button ${className}`}
    type={type}
    onClick={onClick}
  >
    {children || text}
  </button>
);

ActionButton.propTypes = {
  /** The id for a specific button */
  id: PropTypes.string,
  /** The className for a specific button */
  className: PropTypes.string,
  /** Specifies the type of action button */
  type: PropTypes.string,
  /** The elements within the button */
  children: PropTypes.string,
  /** The text withing the button */
  text: PropTypes.string,
  /** The action to be performed onClick */
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  id: null,
  className: null,
  text: null,
  type: null,
  children: null,
  onClick: null,
};

export default ActionButton;
