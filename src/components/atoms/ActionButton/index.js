import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<ActionButton>` atom creates button for actions on forms and things.
 *
 */
const ActionButton = ({
  id,
  className,
  text,
  type,
  disabled,
  children,
  onClick,
}) => (
  <button
    id={id}
    className={`action-button ${className}`}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children || text}
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
  disabled: PropTypes.bool,
  /** The */
  text: PropTypes.string,
  /** The */
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  className: '',
  id: '',
  text: '',
  type: '',
  disabled: false,
  children: '',
  onClick: '',
};

export default ActionButton;
