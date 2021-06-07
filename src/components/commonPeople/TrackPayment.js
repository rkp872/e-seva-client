import React, { Component } from "react";
import CommonPeopleService from "../../services/CommonPeopleService";
import Header from "./Header";

export default class TrackPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionId: "",
      searchResult: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Track Payment";
  }

  trackPayment = () => {
    CommonPeopleService.trackPayment(this.state.transactionId).then((res) => {
      this.setState({ searchResult: res.data });
    });
  };

  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card shadow-lg p-2 bg-white rounded mt-3 text-center">
                <div className="card-body">
                  <div className="row ">
                    <div className="col-md-6 m-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Transaction Id"
                          onChange={(e) => {
                            this.setState({ transactionId: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 offset-md-2">
                      <div className="container text-center mt-2">
                        <button
                          className="btn btn-primary"
                          onClick={this.trackPayment}
                        >
                          Find
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.searchResult ? (
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <table class="table table-borderless">
                  <thead>
                    <th>Transaction Id</th>
                    <td>{this.state.searchResult.transactionId}</td>
                  </thead>
                  <thead>
                    <th>Name</th>
                    <td>{this.state.searchResult.violator.name}</td>
                  </thead>
                  <thead>
                    <th>Email</th>
                    <td>{this.state.searchResult.violator.email}</td>
                  </thead>
                  <thead>
                    <th>Driving Licence</th>
                    <td>{this.state.searchResult.violator.drivingLicence}</td>
                  </thead>
                  <thead>
                    <th>Registration Number</th>
                    <td>
                      {this.state.searchResult.violator.registrationNumber}
                    </td>
                  </thead>
                  <thead>
                    <th>Offense</th>
                    <td>
                      {
                        this.state.searchResult.violator.trafficViolationTypes
                          .offence
                      }
                    </td>
                  </thead>
                  <thead>
                    <th>Fine</th>
                    <td>
                      {
                        this.state.searchResult.violator.trafficViolationTypes
                          .fineAmount
                      }
                    </td>
                  </thead>
                </table>
              </div>
              <div className="col-md-4 offset-md-1">
                <table class="table table-borderless">
                  <thead>
                    <th>Location</th>
                    <td>{this.state.searchResult.violator.location}</td>
                  </thead>
                  <thead>
                    <th>Vehicle Type</th>
                    <td>{this.state.searchResult.violator.vehicleType}</td>
                  </thead>
                  <thead>
                    <th>Date Of Offence</th>
                    <td>{this.state.searchResult.violator.date}</td>
                  </thead>
                  <thead>
                    <th>Paid By</th>
                    <td>{this.state.searchResult.paidBy.name}</td>
                  </thead>
                  <thead>
                    <th>Date and Time of Payment</th>
                    <td>{this.state.searchResult.dateTime}</td>
                  </thead>
                  <thead>
                    <th>Payment Status</th>
                    <td>{this.state.searchResult.violator.paymentStatus}</td>
                  </thead>

                  <div className="container text-center">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        this.setState({ searchResult: "" });
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </table>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
