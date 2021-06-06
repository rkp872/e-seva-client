import React, { Component } from "react";
import CentralRoomService from "../../services/CentralRoomService";

export default class AssignHelpRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpRequestId: this.props.location.data.helpRequestId,
      policeId: this.props.location.data.policeId,
    };
  }
  assignHelpRequest() {
    CentralRoomService.assignHelpRequest(this.state)
      .then((res) => {
        this.props.history.push({
          pathname: "/central-room/dashboard",
          message: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }
  componentDidMount() {
    this.assignHelpRequest();
  }
  render() {
    return <div></div>;
  }
}
