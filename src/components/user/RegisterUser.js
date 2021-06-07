import React, { Component } from "react";
import ImageUploader from "../../services/ImageUploader";
import UserService from "../../services/UserService";
import Header from "./Header";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: true,
      role: "",
      email: "",
      password: "",
      name: "",
      address: "",
      aadharNumber: "",
      aadharCardPicture: "NA",
      drivingLicenceNumber: "NA",
      govtIdCardPicture: "NA",
      phone: "",
      selfPicture: "NA",
      vehicleOwnerPaperPicture: "NA",
      vehiclePicture: "NA",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Register";
  }

  uploadData = () => {
    const formData = new FormData();
    formData.append("role", this.state.role);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("name", this.state.name);
    formData.append("address", this.state.address);
    formData.append("aadharNumber", this.state.aadharNumber);
    formData.append("aadharCardPicture", this.state.aadharCardPicture);
    formData.append("drivingLicenceNumber", this.state.drivingLicenceNumber);
    formData.append("govtIdCardPicture", this.state.govtIdCardPicture);
    formData.append("phone", this.state.phone);
    formData.append("selfPicture", this.state.selfPicture);
    formData.append(
      "vehicleOwnerPaperPicture",
      this.state.vehicleOwnerPaperPicture
    );
    formData.append("vehiclePicture", this.state.vehiclePicture);

    UserService.registerUser(formData)
      .then((res) => {
        this.props.history.push({
          pathname: "/login-user",
          message: res.data,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  };
  handleForm = (event) => {
    event.preventDefault();
    this.uploadData();
  };
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            backgroundColor: "#e6ffff",
            height: "600px",
          }}
        >
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-3">
                <div className="card-body">
                  <form onSubmit={this.handleForm}>
                    <div>
                      <div className="row ">
                        <div className="col-md-3 mt-2 ml-2">
                          <select
                            className="form-control form-select-lg mb-3 inp"
                            aria-label=".form-select-lg example"
                            defaultValue={"One"}
                            onChange={(e) => {
                              this.setState({ role: e.target.value });
                            }}
                          >
                            <option className="form-group" value="One" disabled>
                              Select User Type
                            </option>
                            <option value="ROLE_POLICE" className="form-group">
                              Traffic Police
                            </option>
                            <option value="ROLE_COMMON" className="form-group">
                              Common People
                            </option>
                            <option
                              value="ROLE_AMBULANCE"
                              className="form-group"
                            >
                              Ambulance Driver
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className={this.state.role === "" ? "hidden" : ""}>
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
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                onChange={(e) => {
                                  this.setState({ email: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 m-2">
                            <div className="mb-3">
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => {
                                  this.setState({ password: e.target.value });
                                }}
                              />
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
                        </div>
                        <div className="row ">
                          <div className="col-md-3 m-2">
                            <div className="mb-3">
                              <label htmlFor="address" className="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                onChange={(e) => {
                                  this.setState({ address: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 m-2">
                            <div className="mb-3">
                              <label
                                htmlFor="aadharNumber"
                                className="form-label"
                              >
                                Aadhar Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="aadharNumber"
                                onChange={(e) => {
                                  this.setState({
                                    aadharNumber: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 m-2">
                            <div className="mb-3">
                              <label
                                htmlFor="aadharCardPicture"
                                className="form-label"
                              >
                                Aadhar Card Picture
                              </label>
                              <div class="file-field input-field">
                                <div class="btn">
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      this.setState({ uploaded: false });
                                      const aPic = new FormData();
                                      aPic.append(
                                        "upload_preset",
                                        "e-seva-app"
                                      );
                                      aPic.append(
                                        "cloud_name",
                                        "rohit872cloud"
                                      );
                                      aPic.append("file", e.target.files[0]);
                                      ImageUploader.uploadImage(aPic).then(
                                        (res) => {
                                          this.setState({
                                            aadharCardPicture: res.data.url,
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
                          <div
                            className={
                              this.state.role !== "ROLE_AMBULANCE"
                                ? "hidden"
                                : "col-md-2 m-2"
                            }
                          >
                            <div className="mb-3">
                              <label
                                htmlFor="drivingLicenceNumber"
                                className="form-label"
                              >
                                Driving Licence Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="drivingLicenceNumber"
                                onChange={(e) => {
                                  this.setState({
                                    drivingLicenceNumber: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className={
                              this.state.role !== "ROLE_POLICE"
                                ? "hidden"
                                : "col-md-3 m-2"
                            }
                          >
                            <div className="mb-3">
                              <label
                                htmlFor="govtIdCardPicture"
                                className="form-label"
                              >
                                Govt Id Card Picture
                              </label>
                              <div class="file-field input-field">
                                <div class="btn">
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      this.setState({ uploaded: false });
                                      const gPic = new FormData();
                                      gPic.append(
                                        "upload_preset",
                                        "e-seva-app"
                                      );
                                      gPic.append(
                                        "cloud_name",
                                        "rohit872cloud"
                                      );
                                      gPic.append("file", e.target.files[0]);
                                      ImageUploader.uploadImage(gPic).then(
                                        (res) => {
                                          this.setState({
                                            govtIdCardPicture: res.data.url,
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
                          <div className="col-md-3 m-2">
                            <div className="mb-3">
                              <label
                                htmlFor="selfPicturer"
                                className="form-label"
                              >
                                Self Picture
                              </label>
                              <div class="file-field input-field">
                                <div class="btn">
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      this.setState({ uploaded: false });
                                      const sPic = new FormData();
                                      sPic.append(
                                        "upload_preset",
                                        "e-seva-app"
                                      );
                                      sPic.append(
                                        "cloud_name",
                                        "rohit872cloud"
                                      );
                                      sPic.append("file", e.target.files[0]);
                                      ImageUploader.uploadImage(sPic).then(
                                        (res) => {
                                          this.setState({
                                            selfPicture: res.data.url,
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
                          <div
                            className={
                              this.state.role !== "ROLE_AMBULANCE"
                                ? "hidden"
                                : "col-md-3 m-2"
                            }
                          >
                            <div className="mb-3">
                              <label
                                htmlFor="vehicleOwnerPaperPicture"
                                className="form-label"
                              >
                                Vehicle Owner Paper Picture
                              </label>
                              <div class="file-field input-field">
                                <div class="btn">
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      this.setState({ uploaded: false });
                                      const voPic = new FormData();
                                      voPic.append(
                                        "upload_preset",
                                        "e-seva-app"
                                      );
                                      voPic.append(
                                        "cloud_name",
                                        "rohit872cloud"
                                      );
                                      voPic.append("file", e.target.files[0]);
                                      ImageUploader.uploadImage(voPic).then(
                                        (res) => {
                                          this.setState({
                                            vehicleOwnerPaperPicture:
                                              res.data.url,
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
                          <div
                            className={
                              this.state.role !== "ROLE_AMBULANCE"
                                ? "hidden"
                                : "col-md-2 m-2"
                            }
                          >
                            <div className="mb-3">
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
                                    onChange={(e) => {
                                      this.setState({ uploaded: false });
                                      const vPic = new FormData();
                                      vPic.append(
                                        "upload_preset",
                                        "e-seva-app"
                                      );
                                      vPic.append(
                                        "cloud_name",
                                        "rohit872cloud"
                                      );
                                      vPic.append("file", e.target.files[0]);
                                      ImageUploader.uploadImage(vPic).then(
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

export default RegisterUser;
