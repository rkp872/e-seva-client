import React, { Component } from "react";
import AmbulanceDriverServices from "../../services/AmbulanceDriverServices";
import Header from "./Header";

export default class AssignedMedicalEmergency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      location: "",
      numberOfPeopleEffected: "",
      accidentType: "",
      status: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Medical Emergency";
    AmbulanceDriverServices.getAssignedMedicalEmergency()
      .then((res) => {
        //console.log(res.data);
        this.setState({
          id: res.data.id,
          location: res.data.location,
          numberOfPeopleEffected: res.data.numberOfPeopleEffected,
          accidentType: res.data.accidentType,
          status: res.data.status,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }
  workingMedicalEmergency = () => {
    AmbulanceDriverServices.workingMedicalEmergency(this.state.id)
      .then((res) => {
        this.props.history.push({
          pathname: "/ambulance-service/dashboard",
          message: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  };
  doneMedicalEmergency = () => {
    AmbulanceDriverServices.doneMedicalEmergency(this.state.id)
      .then((res) => {
        this.props.history.push({
          pathname: "/ambulance-service/dashboard",
          message: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  };
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <div className="text-center ">
                    <h5 className="card-title">Asigned Help Request</h5>
                    <div className="table table-borderless">
                      <tr>
                        <th>Location</th>
                        <td>{this.state.location}</td>
                      </tr>
                      <tr>
                        <th>Accident Type</th>
                        <td>{this.state.accidentType}</td>
                      </tr>
                      <tr>
                        <th>Number Of People Effected</th>
                        <td>{this.state.numberOfPeopleEffected}</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>{this.state.status}</td>
                      </tr>
                    </div>
                    <div className="container text-center">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.workingMedicalEmergency}
                      >
                        Working
                      </button>
                      <button
                        className="btn btn-primary m-3"
                        type="button"
                        onClick={this.doneMedicalEmergency}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
