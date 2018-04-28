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
  isRequired,
}) => (
  <input
    type={type}
    defaultValue={defaultValue}
    name={name}
    className={`input-field ${className}`}
    id={id}
    placeholder={placeholder}
    isrequired={isRequired}
  />
);

InputField.propTypes = {
  /** The id for a specific input field */
  id: PropTypes.string,
  /** The className for a specific input field */
  className: PropTypes.string,
  /** The */
  isRequired: PropTypes.bool.isRequired,
  /** The */
  type: PropTypes.string.isRequired,
  /** The */
  defaultValue: PropTypes.string.isRequired,
  /** The */
  name: PropTypes.string.isRequired,
  /** The */
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  id: null,
  className: null,
  placeholder: null,
};

export default InputField;
