import React, { Component } from "react";
import AmbulanceDriverServices from "../../services/AmbulanceDriverServices";

export default class MedicalEmergencyServed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.data,
    };
  }

  assignMedicalEmergency() {
    AmbulanceDriverServices.medicalEmergencyServed(this.state.id)
      .then((res) => {
        this.props.history.push("/ambulance-service/dashboard");
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }
  componentDidMount() {
    document.title = "E-Seva | Medical Emergency";
    this.assignMedicalEmergency();
  }

  render() {
    return <div></div>;
  }
}
