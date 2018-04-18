import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<InputField>` atom creates a link wrapper that
 * acts either like an internal or external link.
 *
 */
const InputField = ({
  id,
  className,
  type,
  defaultValue,
  name,
  placeholder,
  isrequired,
}) => (
  <input
    type={type}
    defaultValue={defaultValue}
    name={name}
    className={`input-field ${className}`}
    id={id}
    placeholder={placeholder}
    isrequired={isrequired}
  />
);

InputField.propTypes = {
  /** The */
  type: PropTypes.string.isRequired,
  /** The */
  defaultValue: PropTypes.string.isRequired,
  /** The */
  name: PropTypes.string.isRequired,
  /** The */
  isrequired: PropTypes.bool.isRequired,
  /** The */
  className: PropTypes.string,
  /** The */
  id: PropTypes.string,
  /** The */
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  className: '',
  id: '',
  placeholder: '',
};

export default InputField;
