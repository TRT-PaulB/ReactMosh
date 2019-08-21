import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  // note the use of htmlFor (for is a reserved kehyword in Javascript)
  // placed cursor and hold down the chift key, then place cursor in another spot - then edit both together

  // USE OF REFS

  // ACCESS VALUES IN REACT
  // 1) username = React.createRef();
  // 2) <input ref={this.username}>
  // 3) const username = this.username.current.value;
  //    ====> ie instead of:   document.getElementById('username').value;
  //                           because react puts a layer of abstraction over the real DOM
  // NOTE: use ref only when necessary, eg to manage focus on input field

  // note the argument e is generated as part of the onSubmit property
  handleSubmit = e => {
    // prevent submitting form to server which causes a full page reload
    e.preventDefault();

    const username = this.username.current.value;

    // save changes on the server
    console.log("submitted login form - username = " + username);
  };

  //   componentDidMount() {
  //     // this.username.current  = reference to the DOM element
  //     this.username.current.focus();
  //   }
  // OR use autoFocus within the input tag below

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
