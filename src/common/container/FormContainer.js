/* eslint "no-unused-vars": "off", "class-methods-use-this": "off", "no-alert": "off" */

import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Form from '../components/Form';
import { validate, validateEmail } from '../utils/validation';


export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      birthday: null,
      hasError: false,
      occupation: null,
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  handleDateChange(date) {
    const state = {};
    state.birthday = date;
    this.setState(state);
  }

  handleSubmit() {
    this.state.hasError = false;
    this.state.errors = [];

    if (!validate(this.state.name, 1)) {
      this.state.hasError = true;
      this.state.errors.push('Name field is mandatory');
    }

    if (!validate(this.state.email, 1) || !validateEmail(this.state.email)) {
      this.state.hasError = true;
      this.state.errors.push('Invalid email');
    }

    if (this.state.birthday != null) {
      const years = Math.floor(moment(new Date()).diff(this.state.birthday, 'years', true));
      if (years < 18) {
        this.state.hasError = true;
        this.state.errors.push('User is younger than 18');
      }
    }

    this.setState(this.state);

    if (!this.state.hasError) {
      axios.post('/api/accounts/create', {
        name: this.state.name,
        email: this.state.email,
        occupation: this.state.occupation,
        birthday: this.state.birthday
      })
        .then((response) => {
          if (response.status === 200) {
            location.href = '/success';
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleSelect(value) {
    const state = {};
    state.occupation = value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <Form
          hasError={this.state.hasError}
          errors={this.state.errors}
          auto={this.state.occupation}
          birthday={this.state.birthday}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onDateChange={this.handleDateChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
