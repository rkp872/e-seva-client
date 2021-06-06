import React, { Component } from "react";
import UserService from "../../services/UserService";
import Header from "./Header";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: this.props.location.message,
    };
  }

  componentDidMount() {
    document.title = "E-Seva | Reset Password";
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    UserService.forgotPassword(formData)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: res.data });
      })
      .catch((error) => {
        this.setState({
          message: {
            message: "Invalid Credentials",
            type: "danger",
          },
        });
      });
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
                  <h4 className="text-center">Enter Your Email</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        name="username"
                        required
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
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
