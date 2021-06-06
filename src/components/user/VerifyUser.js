import React, { Component } from "react";
import UserService from "../../services/UserService";

export default class VerifyUser extends Component {
  componentDidMount() {
    const token = this.props.match.params.token;
    console.log("Token : ", token);
    UserService.verifyUser(token).then((res) => {
      this.props.history.push({
        pathname: "/login-user",
        message: res.data,
      });
    });
  }
  render() {
    return <div></div>;
  }
}
