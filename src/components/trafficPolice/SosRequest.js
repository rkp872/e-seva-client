import React, { Component } from "react";
import LocationService from "../../services/LocationService";
import TrafficPoliceService from "../../services/TrafficPoliceService";
import Header from "./Header";

export default class SosRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      info: "",
    };
  }

  componentDidMount() {
    document.title = "E-Seva | SOS Request";
  }

  handleSubmit = (event) => {
    event.preventDefault();
    TrafficPoliceService.saveSosRequest(this.state)
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
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow-lg p-2 bg-white rounded mt-3 card-block d-flex">
                <div className="card-body align-items-center d-flex justify-content-center">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <div className="row">
                        <div className="col-md-4 m-2">
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
                                  LocationService.getMyLocation()
                                    .then((res) => res.json())
                                    .then((data) => {
                                      console.log(data);
                                      this.setState({
                                        location:
                                          data.locality +
                                          "," +
                                          data.principalSubdivision,
                                      });
                                    });
                                }}
                              >
                                Locate Me
                              </button>
                            </div>
                          }
                        </div>
                        <div className="col-md-4 m-2">
                          <div className="mb-3">
                            <label htmlFor="info" className="form-label">
                              Info
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="info"
                              onChange={(e) => {
                                this.setState({ info: e.target.value });
                              }}
                            />
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
