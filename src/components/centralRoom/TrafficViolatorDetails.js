import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class TrafficViolatorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.location.data,
    };
  }
  componentDidMount() {
    document.title = `E-Seva | ${this.state.details.name}`;
  }
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <h2
                    className="text-center"
                    style={{ fontFamily: "Arial Black", color: "#757575" }}
                  >
                    {this.state.details.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Phone</div>
                        <div className="detail_data">
                          {this.state.details.phone}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Email</div>
                        <div className="detail_data">
                          {this.state.details.email}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Registration Number</div>
                        <div className="detail_data">
                          {this.state.details.registrationNumber}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Vehicle Type</div>
                        <div className="detail_data">
                          {this.state.details.vehicleType}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Location</div>
                        <div className="detail_data">
                          {this.state.details.location}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Date</div>
                        <div className="detail_data">
                          {this.state.details.date}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Other Info</div>
                        <div className="detail_data">
                          {this.state.details.otherInfo}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Registered By</div>
                        <div className="detail_data">
                          {this.state.details.registeredBy.name}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Payment Status</div>
                        <div className="detail_data">
                          {this.state.details.paymentStatus}
                        </div>
                      </div>
                      <div className="detail_container">
                        <div className="detail_type">Offense</div>
                        <div className="detail_data">
                          {this.state.details.trafficViolationTypes.offence}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Date</div>
                        <div className="detail_data">
                          {this.state.details.date}
                        </div>
                      </div>
                      <div className="container text-center mt-4">
                        <Link
                          to="/central-room/get-traffic-violators-list"
                          className="btn btn-lg btn-outline-primary"
                        >
                          Back
                        </Link>
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
