import React, { PropTypes } from 'react';

const FormElement = ({ id, label, type = 'text', placeholder, onChange }) => (
  <div className="form-row">
    <label htmlFor={id}>{label}</label>
    <input type={type} name={id} id={id} placeholder={placeholder} onChange={onChange} />
  </div>
);

FormElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,

  onChange: PropTypes.func
};

export default FormElement;
