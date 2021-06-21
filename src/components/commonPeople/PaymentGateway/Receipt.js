import React, { Component } from "react";
import CommonPeopleService from "../../../services/CommonPeopleService";
import Header from "./../Header";
import logo from "../../../resources/img/logoNew.jpg";

export default class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailData: this.props.location.emailData,
      receipt: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Payment Gateway";
    var formData = new FormData();
    formData.append("email", this.state.emailData);
    CommonPeopleService.getPaymentData(formData).then((res) => {
      this.setState({ receipt: res.data });
      //console.log(res.data);.
      console.log(this.state.receipt.violator.name);
    });
  }
  printHandler = () => {
    //window.print();
    var printContents = document.getElementById("toPrint").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow-lg ">
                <div id="toPrint" className="printDiv ">
                  <div className="container text-center ">
                    <img
                      src={logo}
                      alt="ESeva"
                      style={{
                        height: "59px",
                        margin: "3px 6px",
                        borderRadius: "8px",
                      }}
                    ></img>
                  </div>
                  {this.state.receipt ? (
                    <table class="table table-borderless">
                      <thead>
                        <th>Transaction ID</th>
                        <td>{this.state.receipt.transactionId}</td>
                      </thead>

                      <thead>
                        <th>Name</th>
                        <td>{this.state.receipt.violator.name}</td>
                      </thead>

                      <thead>
                        <th>Email</th>
                        <td>{this.state.receipt.violator.email}</td>
                      </thead>
                      <thead>
                        <th>Driving Licence</th>
                        <td>{this.state.receipt.violator.drivingLicence}</td>
                      </thead>
                      <thead>
                        <th>Registration Number</th>
                        <td>
                          {this.state.receipt.violator.registrationNumber}
                        </td>
                      </thead>

                      <thead>
                        <th>Offense</th>
                        <td>
                          {
                            this.state.receipt.violator.trafficViolationTypes
                              .offence
                          }
                        </td>
                      </thead>
                      <thead>
                        <th>Fine Amount</th>
                        <td>
                          {
                            this.state.receipt.violator.trafficViolationTypes
                              .fineAmount
                          }
                        </td>
                      </thead>
                      <thead>
                        <th>Location</th>
                        <td>{this.state.receipt.violator.location}</td>
                      </thead>
                      <thead>
                        <th>Vehicle Type</th>
                        <td>{this.state.receipt.violator.vehicleType}</td>
                      </thead>
                      <thead>
                        <th>Offence Date</th>
                        <td>{this.state.receipt.violator.date}</td>
                      </thead>
                      <thead>
                        <th>Paid Date</th>
                        <td>{this.state.receipt.dateTime}</td>
                      </thead>
                      <thead>
                        <th>Paid By</th>
                        <td>{this.state.receipt.paidBy.name}</td>
                      </thead>
                    </table>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-2 offset-md-5">
                  <button
                    className="btn btn-outline-primary m-2"
                    onClick={this.printHandler}
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
