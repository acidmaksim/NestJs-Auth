import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}
validateForm() {
  this.setState({formValid: this.state.emailValid &&
                            this.state.passwordValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

  render () {
    return (

      <form className='wrapper'>
        <h2>Добро пожаловать</h2>
      <div className='panel panel-default'>
        <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input 
          type='email' required
          className='input'
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleUserInput}
             />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Пароль</label>
          <input
          type='password'
          className='input'
          name='password'
          placeholder='Password'
          value={this.state.password} 
          onChange={this.handleUserInput}
          />

          <div className='wrapper'>
        <button type="submit" className="btn" disabled={!this.state.formValid}>Sign up</button>
          </div>
 </div>
      </form>
    )
  }
 }
 export default Form;