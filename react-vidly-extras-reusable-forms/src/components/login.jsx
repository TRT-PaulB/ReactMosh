import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi"; // npm i joi
// see: https://www.npmjs.com/package/joi

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"), // .label adds more control, but when omitted it is capialize by default (seemingly)
    password: Joi.string()
      .required()
      .label("Password")
  };

  validateWithJoi = () => {
    // params:  binding object, validation definition
    const option = { abortEarly: false }; // ie do not terminate validation as soon as Joi finds an error
    const result = Joi.validate(this.state.account, this.schema, option);
    console.log(result); // useful to examine element
    if (!result.error) return null; // no Joi error

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path] = item.message; // creates an errors map / array of different paths (ie. property names)
    }

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validateWithJoi();
    this.setState({ errors: errors || {} });

    if (errors) return;

    console.log("save to the database");
  };

  validateProperty = ({ name, value }) => {
    // use compouted properties in ES6
    const obj = { [name]: value }; // name of input property supplied dynamically
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema); // note we want to abort early, so as not to display all errors at once

    // if there is an error on this input component, return the first error details string
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button disabled={this.validateWithJoi()} className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

// NOTE: disabled={this.validateWithJoi()}
//       if result contains an object, that equates to true, else if no object it is false

export default LoginForm;
