import React, { Component } from "react";
import TrafficPoliceService from "../../services/TrafficPoliceService";
import Header from "./Header";
import ImageUploader from "../../services/ImageUploader";

export default class RegisterTrafficViolation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: true,
      name: "",
      trafficViolationTypes: "",
      phone: "",
      email: "",
      drivingLicence: "",
      registrationNumber: "",
      vehicleType: "",
      vehiclePicture: "",
      location: "",
      otherInfo: "",

      listTrafficViolationTypes: [],
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Traffic Violation";
    TrafficPoliceService.getTrafficViolationTypes().then((res) => {
      this.setState({ listTrafficViolationTypes: res.data });
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("trafficViolationTypes", this.state.trafficViolationTypes);
    formData.append("phone", this.state.phone);
    formData.append("email", this.state.email);
    formData.append("drivingLicence", this.state.drivingLicence);
    formData.append("registrationNumber", this.state.registrationNumber);
    formData.append("vehicleType", this.state.vehicleType);
    formData.append("vehiclePicture", this.state.vehiclePicture);
    formData.append("location", this.state.location);
    formData.append("otherInfo", this.state.otherInfo);
    TrafficPoliceService.saveTrafficViolator(formData)
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
            <div className="col-md-10 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-3">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <div className="row">
                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label
                              htmlFor="trafficViolationTypes"
                              className="form-label"
                            >
                              Offense
                            </label>
                            <select
                              className="form-control form-select-lg mb-3 inp"
                              onChange={(e) => {
                                this.setState({
                                  trafficViolationTypes: e.target.value,
                                });
                              }}
                            >
                              {this.state.listTrafficViolationTypes.map(
                                (items) => (
                                  <option
                                    className="form-group"
                                    key={items.id}
                                    value={items.id}
                                  >
                                    {items.offence}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-2 m-2">
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              onChange={(e) => {
                                this.setState({ phone: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label
                              htmlFor="drivingLicence"
                              className="form-label"
                            >
                              Driving Licence Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="drivingLicence"
                              onChange={(e) => {
                                this.setState({
                                  drivingLicence: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label
                              htmlFor="registrationNumber"
                              className="form-label"
                            >
                              Registration Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="registrationNumber"
                              onChange={(e) => {
                                this.setState({
                                  registrationNumber: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 m-2">
                          <div className="mb-3">
                            <label htmlFor="vehicleType" className="form-label">
                              Vehicle Type
                            </label>
                            <select
                              className="form-control form-select-lg mb-3 inp"
                              onChange={(e) => {
                                this.setState({ vehicleType: e.target.value });
                              }}
                            >
                              <option className="form-group" value="2 Wheeler">
                                2 Wheeler
                              </option>
                              <option className="form-group" value="3 Wheeler">
                                3 Wheeler
                              </option>
                              <option className="form-group" value="4 Wheeler">
                                4 Wheeler
                              </option>
                              <option className="form-group" value="6 Wheeler">
                                6 Wheeler
                              </option>
                              <option className="form-group" value="8 Wheeler">
                                8 Wheeler
                              </option>
                              <option className="form-group" value="10 Wheeler">
                                10 Wheeler
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 m-2">
                          <div className="mb-3 form-group">
                            <label
                              htmlFor="vehiclePicture"
                              className="form-label"
                            >
                              Vehicle Picture
                            </label>
                            <div class="file-field input-field">
                              <div class="btn">
                                <input
                                  type="file"
                                  name="file"
                                  onChange={(e) => {
                                    this.setState({ uploaded: false });
                                    const sPic = new FormData();
                                    sPic.append("upload_preset", "e-seva-app");
                                    sPic.append("cloud_name", "rohit872cloud");
                                    sPic.append("file", e.target.files[0]);
                                    ImageUploader.uploadImage(sPic).then(
                                      (res) => {
                                        this.setState({
                                          vehiclePicture: res.data.url,
                                          uploaded: true,
                                        });
                                      }
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 m-2">
                          <div className="mb-3">
                            <label htmlFor="location" className="form-label">
                              Location
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="location"
                              onChange={(e) => {
                                this.setState({ location: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-2 m-2">
                          <div className="mb-3">
                            <label htmlFor="otherInfo" className="form-label">
                              Other Info
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="otherInfo"
                              onChange={(e) => {
                                this.setState({ otherInfo: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="container text-center">
                          {this.state.uploaded ? (
                            <button className="btn btn-primary" type="submit">
                              Submit
                            </button>
                          ) : (
                            <i
                              class="fa fa-refresh fa-spin"
                              style={{ fontSize: "50px" }}
                            ></i>
                          )}
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
