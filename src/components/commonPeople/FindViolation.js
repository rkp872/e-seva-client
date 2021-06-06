import React, { Component } from "react";
import CommonPeopleService from "../../services/CommonPeopleService";
import Header from "./Header";

export default class FindViolation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "",
      enteredValue: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Find Violation";
  }
  handleClick = () => {
    const searchBy = this.state.searchBy;
    const formData = new FormData();
    if (searchBy === "email") {
      formData.append("email", this.state.enteredValue);
      CommonPeopleService.searchByEmail(formData)
        .then((res) => {
          this.props.history.push({
            pathname: "/common-people/find-violation-result",
            data: res,
          });
        })
        .catch((error) => {
          this.props.history.push("/internal-server-error");
        });
    } else if (searchBy === "dl") {
      formData.append("drivingLicenceNumber", this.state.enteredValue);
      CommonPeopleService.searchByDL(formData)
        .then((res) => {
          this.props.history.push({
            pathname: "/common-people/find-violation-result",
            data: res,
          });
        })
        .catch((error) => {
          this.props.history.push("/internal-server-error");
        });
    } else if (searchBy === "reg") {
      formData.append("regNumber", this.state.enteredValue);
      CommonPeopleService.searchByReg(formData)
        .then((res) => {
          this.props.history.push({
            pathname: "/common-people/find-violation-result",
            data: res,
          });
        })
        .catch((error) => {
          this.props.history.push("/internal-server-error");
        });
    } else {
      alert("Invalid Request");
    }
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
                  <div>
                    <div className="row ">
                      <div className="col-md-3 mt-2 ml-2">
                        <select
                          className="form-control form-select-lg mb-3 inp"
                          aria-label=".form-select-lg example"
                          defaultValue={"One"}
                          onChange={(e) => {
                            this.setState({ searchBy: e.target.value });
                          }}
                        >
                          <option className="form-group" value="One" disabled>
                            Search By
                          </option>
                          <option value="email" className="form-group">
                            Email
                          </option>
                          <option value="dl" className="form-group">
                            Driving Licence
                          </option>
                          <option value="reg" className="form-group">
                            Reg Number
                          </option>
                        </select>
                      </div>
                      <div className="col-md-6 m-2">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Value Here"
                            onChange={(e) => {
                              this.setState({ enteredValue: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 ">
                        <div className="container text-center mt-2">
                          <button
                            className="btn btn-primary"
                            onClick={this.handleClick}
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
          </div>
        </div>
      </>
    );
  }
}
