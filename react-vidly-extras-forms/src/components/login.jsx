import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    // REACT: applying to state means we can be faithful to a single source of truth
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  //   handleChange = e => {
  //     // check this in the react tab in chrome
  //     const account = { ...this.state.account };
  //     account.username = e.currentTarget.value;
  //     this.setState({ account: account });
  //   };

  // CAN HANDLE MULTIPLE FIELDS (need a name field on the inputs)
  handleChange = ({ currentTarget: input }) => {
    // ie destructuring from e.currentTarget   (renames to input)
    // check this in the react tab in chrome
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account: account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
              value={account.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              value={account.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
