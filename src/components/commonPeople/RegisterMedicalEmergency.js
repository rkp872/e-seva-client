import React, { Component } from "react";
import LocationService from "../../services/LocationService";
import CommonPeopleService from "../../services/CommonPeopleService";
import Header from "./Header";

export default class RegisterMedicalEmergencyCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accidentType: "",
      location: "",
      numberOfPeopleEffected: "",
      priority: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Medical Emergency";
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("From state : ", this.state);
    CommonPeopleService.saveMedicalEmergency(this.state)
      .then((res) => {
        console.log("Data saved : " + res.data);
        this.props.history.push({
          pathname: "/common-people/dashboard",
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
            <div className="col-md-8 offset-md-2">
              <div className="card shadow-lg p-2 bg-white rounded mt-3">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <div className="row">
                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label
                              htmlFor="accidentType"
                              className="form-label"
                            >
                              Accident Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="accidentType"
                              onChange={(e) => {
                                this.setState({ accidentType: e.target.value });
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label htmlFor="location" className="form-label">
                              Location
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="location"
                              value={this.state.location}
                              onChange={(e) => {
                                this.setState({ location: e.target.value });
                              }}
                            />
                          </div>
                          {
                            <div className="container text-center">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm "
                                onClick={() => {
                                  LocationService.getMyLocation().then(
                                    (res) => {
                                      this.setState({
                                        location:
                                          res.data.locality +
                                          "," +
                                          res.data.principalSubdivision,
                                      });
                                    }
                                  );
                                }}
                              >
                                Locate Me
                              </button>
                            </div>
                          }
                        </div>

                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label
                              htmlFor="numberOfPeopleEffected"
                              className="form-label"
                            >
                              Number Of People Effected
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="numberOfPeopleEffected"
                              onChange={(e) => {
                                this.setState({
                                  numberOfPeopleEffected: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-md-2 m-2">
                          <div className="mb-3">
                            <label htmlFor="priority" className="form-label">
                              Priority
                            </label>
                            <select
                              className="form-control"
                              id="priority"
                              onChange={(e) => {
                                this.setState({ priority: e.target.value });
                              }}
                            >
                              <option className="form-group" value="1">
                                Very Minor
                              </option>
                              <option className="form-group" value="2">
                                Minor
                              </option>
                              <option className="form-group" value="3">
                                Moderate
                              </option>
                              <option className="form-group" value="4">
                                Critical
                              </option>
                              <option className="form-group" value="4">
                                Very Critical
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="container text-center">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                          <button className="btn btn-primary m-3" type="reset">
                            Reset
                          </button>
                        </div>
                      </div>
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
