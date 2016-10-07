import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import FormElement from './form-elements/FormElement';
import AutoCompleteElement from './form-elements/AutoCompleteElement';


const Form = ({ hasError, errors, onChange, onSubmit, auto, onSelect, birthday, onDateChange }) => (
  <div className="form-box">
    <div className="form-icon">
      <img src="/icons/add-user.svg" alt="User icon" />
    </div>
    <div className="form-content">
      <div className="title">Please fill in the form</div>

      <FormElement id="name" label="Name" placeholder="Enter your full name" onChange={onChange} />

      <FormElement id="email" label="Email address" type="email" placeholder="Your email goes here" onChange={onChange} />

      <div className="form-row">
        <label htmlFor="birthday">Birthday (optional)</label>
        <DatePicker
          id="birthday"
          selected={birthday}
          onChange={onDateChange}
          showYearDropdown
          dateFormatCalendar="MMMM"
        />
      </div>

      <AutoCompleteElement auto={auto || ''} onChange={onChange} onSelect={onSelect} />

      {(hasError
        ? <div className="error-container">
          <p>Please correct the following field(s):</p>
          <ul className="error-list">{errors.map((result, i) => (
            <li key={i}>{result}</li>)) }
          </ul>
        </div>
        : null
      )}

      <div className="submit-button" onClick={onSubmit}>Submit</div>

    </div>
  </div>
);

Form.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  auto: PropTypes.string,
  birthday: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
