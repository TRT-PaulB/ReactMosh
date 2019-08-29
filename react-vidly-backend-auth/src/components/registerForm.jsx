import React from "react";
import Joi from "joi";
import Form from "../common/form";

//import { register } from "../services/userService";
// BETTER syntax for importing all functions from userService.js
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .min(1)
      .email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  /*  // JOI:  https://www.npmjs.com/package/joi
username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })

*/

  doSubmit = () => {
    const { username, password, name } = this.state.data;
    // this.state.data.username
    // this.state.data.password
    // this.state.data.name
  };

  render() {
    return (
      <React.Fragment>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true, "email")}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderInput("name", "Name", true)}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
