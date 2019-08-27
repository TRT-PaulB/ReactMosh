import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    // REACT: applying to state means we can be faithful to a single source of truth
    account: { username: "", password: "" }, // control the elements, ie not null / undefined
    errors: {}
  };

  // Note could call a function and call:    errors.find(e => e.name === 'username')
  // but not good practice
  // COMPARE TO setting an object:
  //   errors: {
  //     username: "username field is invalid"
  //   }

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    // return null if there is no data
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    //console.log("errors", errors);
    this.setState({ errors: errors || {} });

    // tests to check if errors is NULL
    if (errors) return;

    console.log("save to the database");
  };

  validateProperty = input => {
    const { name, value } = input;

    if (name === "username") {
      if (value.trim() === "") return "Username is required";
      // add in further validation for the specific input component argument
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required";
      // add in further validation for the specific input component argument
    }
  };

  handleChange = ({ currentTarget: input }) => {
    // validate changes as they are entered [start]
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input); // get error msg for a particular field as it is being typed

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name]; // note how just 1 of these errors can be deleted with this syntax
    // validate changes as they are entered [end]

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

          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
