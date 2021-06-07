import React, { Component } from "react";
import TrafficPoliceService from "../../services/TrafficPoliceService";
import Header from "./Header";

export default class HelpRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sosId: "",
      requestedBy: "",
      location: "",
      status: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Help Request";
    TrafficPoliceService.getAssignedHelpRequest().then((res) => {
      if (res.data)
        this.setState({
          requestedBy: res.data.requestedBy.name,
          location: res.data.location,
          status: res.data.status,
          sosId: res.data.id,
        });
    });
  }
  workingHelpRequest = () => {
    TrafficPoliceService.workingStatusHelpStatus(this.state.sosId).then(
      (res) => {
        this.props.history.push({
          pathname: "/traffic-police/dashboard",
          message: res.data,
        });
      }
    );
  };
  doneHelpRequest = () => {
    TrafficPoliceService.doneStatusHelpStatus(this.state.sosId)
      .then((res) => {
        this.props.history.push({
          pathname: "/traffic-police/dashboard",
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
        {console.log(this.state)}
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card shadow-lg p-2 bg-white rounded mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8 offset--md-2">
                      <table className="table table-borderless ">
                        <thead>
                          <th>Requested By</th>
                          <th>Location</th>
                          <th>Status</th>
                        </thead>
                        <tr>
                          <td>{this.state.requestedBy}</td>
                          <td>{this.state.location}</td>
                          <td>{this.state.status}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 offset-md-4">
                      <div className="container text-center">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={this.workingHelpRequest}
                        >
                          Working
                        </button>
                        <button
                          className="btn btn-primary m-3"
                          type="button"
                          onClick={this.doneHelpRequest}
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
        </div>
      </>
    );
  }
}
