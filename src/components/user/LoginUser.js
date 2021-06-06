import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import UserService from "../../services/UserService";
import Header from "./Header";

export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogin: false,
      message: this.props.location.message,
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Login";
  }

  handleLogin = (event) => {
    event.preventDefault();
    //console.log(this.state);
    event.preventDefault();
    UserService.loginUser(this.state)
      .then((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.token,
            userType: res.data.user.role,
            userData: res.data.user,
          })
        );
        this.setState({ login: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 423) {
            this.setState({
              message: error.response.data,
            });
          } else {
            this.setState({
              message: {
                message: "Invalid Credentials",
                type: "danger",
              },
            });
          }
        } else {
          this.props.history.push({
            pathname: "/internal-server-error",
          });
        }
      });
  };
  renderDashboard() {
    // var user = JSON.parse(localStorage.getItem("login"));
    var user = localStorage.getItem("login");
    user = JSON.parse(user);

    if (user != null) {
      console.log(user.token);
      if (user.userType === "ROLE_POLICE")
        return <Redirect to={"/traffic-police/dashboard"} />;
      else if (user.userType === "ROLE_COMMON")
        return <Redirect to={"/common-people/dashboard"} />;
      else if (user.userType === "ROLE_CENTRAL")
        return <Redirect to={"/central-room/dashboard"} />;
      else if (user.userType === "ROLE_AMBULANCE")
        return <Redirect to={"/ambulance-service/dashboard"} />;
      else if (user.userType === "ROLE_MEDICAL")
        return <Redirect to={"/medical-team/dashboard"} />;
    }
  }
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
                  <h4 className="text-center">Login Here</h4>
                  <form onSubmit={this.handleLogin}>
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
                    <div className="form-group">
                      <label className="form-label">Password</label>
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

                    <div className="container text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    <div className="container mt-3 text-center">
                      <Link
                        to="/forgot-password"
                        className="ml-2"
                        style={{ textDecoration: "none" }}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="container mt-3">
                      <span className="font-weight-bold">
                        Don't have an account ?
                      </span>
                      <Link to="/register-user" className="ml-2">
                        Register
                      </Link>
                    </div>
                  </form>
                  {this.renderDashboard()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
