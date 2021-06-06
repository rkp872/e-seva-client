import React, { Component } from "react";
import aadhar from "../../resources/img/Aadhar.png";
import Header from "./Header";

export default class CommonProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    document.title = "E-Seva | Profile";
    const user = JSON.parse(localStorage.getItem("login"));
    const userData = user.userData;
    console.log("UserData : ", userData);
    this.setState({ user: userData });
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
                    {this.state.user.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Phone</div>
                        <div className="detail_data">
                          {this.state.user.phone}
                        </div>
                      </div>
                      <div className="detail_container">
                        <div className="detail_type">Aadhar Card Picture</div>
                        <div className="detail_data">
                          <img className="docs-style" src={aadhar} alt="" />
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Aadhar Number</div>
                        <div className="detail_data">
                          {this.state.user.aadharNumber}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Email</div>
                        <div className="detail_data">
                          {this.state.user.email}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Self Picture</div>
                        <div className="detail_data">
                          {/* {this.state.user.selfPicture} */}
                          <img className="docs-style" src={aadhar} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                      <div className="detail_container">
                        <div className="detail_type">Address</div>
                        <div className="detail_data">
                          {this.state.user.address}
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
