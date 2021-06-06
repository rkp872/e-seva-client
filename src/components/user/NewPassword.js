import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import UserService from "../../services/UserService";
import Header from "./Header";

export default class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      message: this.props.location.message,
    };
  }

  componentDidMount() {
    document.title = "E-Seva | Reset Password";
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const token = this.props.match.params.token;
      console.log("Token : ", token);
      const formData = new FormData();
      formData.append("password", this.state.password);
      UserService.resetPassword(formData, token)
        .then((res) => {
          console.log(res.data);
          this.props.history.push({
            pathname: "/login-user",
            message: res.data,
          });
        })
        .catch((error) => {
          this.setState({
            message: {
              message: "Invalid Credentials",
              type: "danger",
            },
          });
        });
    } else {
      this.setState({
        message: {
          message: "Password Doesn't Match",
          type: "danger",
        },
      });
    }
  };
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              {this.state.message ? (
                <div
                  className="container mt-5 text-center"
                  style={{ fontFamily: "Arial Black", fontWeight: "bold" }}
                >
                  <h5 className={`alert alert-${this.state.message.type}`}>
                    {this.state.message.message}
                  </h5>
                </div>
              ) : (
                ""
              )}
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body ">
                  <h4 className="text-center">Reset Password</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">New Password</label>
                      <input
                        name="password"
                        required
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Confirm Password</label>
                      <input
                        name="confirmPassword"
                        required
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                          this.setState({ confirmPassword: e.target.value });
                        }}
                      />
                    </div>

                    <div className="container text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
