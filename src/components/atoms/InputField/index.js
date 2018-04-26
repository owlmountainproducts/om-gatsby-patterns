import React from 'react';
import PropTypes from 'prop-types';

/**
 * ATOM: The `<InputField>` atom creates an input field.
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
  className: null,
  id: null,
  placeholder: null,
};

export default InputField;
