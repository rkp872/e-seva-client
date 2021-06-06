import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.data,
    };
  }

  componentDidMount() {
    document.title = "E-Seva | Profile";
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
                        <div className="detail_type">Email</div>
                        <div className="detail_data">
                          {this.state.user.email}
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Address</div>
                        <div className="detail_data">
                          {this.state.user.address}
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
                        <div className="detail_type">Aadhar Card Picture</div>
                        <div className="detail_data">
                          <img
                            className="docs-style"
                            src={this.state.user.aadharCardPicture}
                          />
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">ID Card Picture</div>
                        <div className="detail_data">
                          <img
                            className="docs-style"
                            src={this.state.user.govtIdCardPicture}
                          />
                        </div>
                      </div>

                      <div className="detail_container">
                        <div className="detail_type">Self Picture</div>
                        <div className="detail_data">
                          <img
                            className="docs-style"
                            src={this.state.user.selfPicture}
                            alt=""
                          />
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
