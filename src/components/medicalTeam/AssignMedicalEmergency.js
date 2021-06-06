import React, { Component } from "react";
import MedicalTeamServices from "../../services/MedicalTeamServices";

export default class AssignMedicalEmergency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalEmeregencyId: this.props.location.data.medicalEmeregencyId,
      ambulanceServiceId: this.props.location.data.ambulanceServiceId,
    };
  }
  assignMedicalEmergency() {
    MedicalTeamServices.assignMedicalEmergency(this.state)
      .then((res) => {
        this.props.history.push({
          pathname: "/medical-team/dashboard",
          message: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }
  componentDidMount() {
    this.assignMedicalEmergency();
  }
  render() {
    return <div></div>;
  }
}
