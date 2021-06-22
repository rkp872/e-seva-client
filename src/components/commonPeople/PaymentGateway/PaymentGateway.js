import React, { Component } from "react";
import "./style.css";
import Header from "./../Header";
import CommonPeopleService from "../../../services/CommonPeopleService";

export default class PaymentGateway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      violator: this.props.location.data,
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Payment Gateway";
  }
  handlePay = () => {
    const formData = new FormData();
    formData.append("violatorid", this.state.violator.id);
    CommonPeopleService.finePayment(formData)
      .then((res) => {
        this.props.history.push({
          pathname: "/common-people/receipt",
          transactionDetails: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  };
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-4 offset-2">
              <div className="card shadow-lg p-3 bg-white rounded mt-5">
                <div className="card-body">
                  <table class="table table-borderless">
                    <thead>
                      <th>Name</th>
                      <td>{this.state.violator.name}</td>
                    </thead>
                    <thead>
                      <th>Email</th>
                      <td>{this.state.violator.email}</td>
                    </thead>
                    <thead>
                      <th>Driving Licence</th>
                      <td>{this.state.violator.drivingLicence}</td>
                    </thead>
                    <thead>
                      <th>Registration Number</th>
                      <td>{this.state.violator.registrationNumber}</td>
                    </thead>

                    <thead>
                      <th>Offense</th>
                      <td>
                        {this.state.violator.trafficViolationTypes.offence}
                      </td>
                    </thead>
                    <thead>
                      <th>Location</th>
                      <td>{this.state.violator.location}</td>
                    </thead>
                    <thead>
                      <th>Vehicle Type</th>
                      <td>{this.state.violator.vehicleType}</td>
                    </thead>
                    <thead>
                      <th>Date</th>
                      <td>{this.state.violator.date}</td>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="card shadow-lg p-2 rounded mt-5"
                style={{ backgroundColor: "#e8eaf6" }}
              >
                <div className="card-body">
                  <form className="form" autocomplete="off">
                    <div className="form-group">
                      <label for="cc_name">Card Holder's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc_name"
                        pattern="\w+ \w+.*"
                        title="First and last name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        autocomplete="off"
                        maxlength="20"
                        pattern="\d{16}"
                        title="Credit card number"
                        required
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-md-12">Card Exp. Date</label>
                      <div className="col-md-4">
                        <select
                          className="form-control"
                          name="cc_exp_mo"
                          size="0"
                        >
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select
                          className="form-control"
                          name="cc_exp_yr"
                          size="0"
                        >
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                          maxlength="3"
                          pattern="\d{3}"
                          title="Three digits at back of your card"
                          required
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-md-12">Amount</label>
                    </div>
                    <div className="form-inline">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          className="form-control text-right"
                          id="exampleInputAmount"
                          value={
                            this.state.violator.trafficViolationTypes.fineAmount
                          }
                          disabled
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row mt-4">
                      <div className="col-md-6 offset-3">
                        <button
                          type="submit"
                          className="btn btn-primary  btn-block "
                          onClick={this.handlePay}
                        >
                          Pay
                        </button>
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
