import "./LoginPage.scss";
import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  changeRegisterState = () => {
    if (this.state.username && this.state.password) {
      sessionStorage.setItem("registerState", "true");
      sessionStorage.setItem("username", this.state.username);
    } else {
      sessionStorage.setItem("registerState", "false");
    }
  };
  render() {
    return (
      <div className="loginPage">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              required="required"
              onChange={(e) => this.setState({username: e.target.value})}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required="required"
              onChange={(e) => this.setState({password: e.target.value})}
            ></input>
          </div>
        </form>
        <a
          type="submit"
          className="btn btn-outline-warning mt-5"
          onClick={(e) => {
            if (this.state.username && this.state.password) {
              this.changeRegisterState();
            } else {
              e.preventDefault();
              alert("Please write your name and password");
            }
          }}
          href="/"
        >
          Log In
        </a>
      </div>
    );
  }
}

export default LoginPage;
