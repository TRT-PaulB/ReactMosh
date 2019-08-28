import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  // JOI:  https://www.npmjs.com/package/joi
  validateWithJoi = () => {
    console.log("validating with joi");

    // params:  binding object, validation definition
    const option = { abortEarly: false }; // ie do not terminate validation as soon as Joi finds an error
    const result = Joi.validate(this.state.data, this.schema, option);
    if (!result.error) return null; // no Joi error

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path] = item.message; // creates an errors map / array of different paths (ie. property names)
    }

    return errors;
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

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validateWithJoi();
    this.setState({ errors: errors || {} });

    if (errors) return;

    // it is interesing that this can be implemented only at the subclass level
    // ie. no need for empty doSubmit() function in this class
    this.doSubmit();
  };

  renderButton = label => {
    return (
      <button disabled={this.validateWithJoi()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (propName, label, autoFocus, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={propName}
        label={label}
        value={data[propName]} //  value={data.propName}
        onChange={this.handleChange}
        error={errors[propName]} // error={errors.username}
        autoFocus={autoFocus}
      />
    );
  };

  renderSelect = (propName, label, autoFocus, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={propName}
        label={label}
        value={data[propName]} //  value={data.propName}
        autoFocus={autoFocus}
        options={options}
        error={errors[propName]} // error={errors.username}
        onChange={this.handleChange} // KEY: hook into this onChange event handler
      />
    );
  };
}
// note there is no render method because this component is for validation only

export default Form;
