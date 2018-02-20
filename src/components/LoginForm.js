import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
    } else {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              onChange={this.handleUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              onChange={this.handlePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
