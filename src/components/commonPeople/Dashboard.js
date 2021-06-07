import React, { Component } from "react";
import { Link } from "react-router-dom";
import covid from "../../resources/docs/covid.pdf";
import file1 from "../../resources/docs/file1.pdf";
import file2 from "../../resources/docs/file2.pdf";
import file3 from "../../resources/docs/file3.pdf";
import file4 from "../../resources/docs/file4.pdf";
import amb from "../../resources/img/amb.jpg";
import central from "../../resources/img/central.jpg";
import common from "../../resources/img/common.jpg";
import footerimg from "../../resources/img/footerimg.png";
import trpolice from "../../resources/img/trpolice.jpg";
import Header from "./Header";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      message: this.props.location.message,
    };
  }

  componentDidMount() {
    document.title = "E-Seva | Dashboard";

    const user = JSON.parse(localStorage.getItem("login"));
    const userData = user.userData;

    this.setState({ user: userData });
  }

  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {this.state.message ? (
                <div
                  className="container mt-5 text-center"
                  style={{ fontFamily: "Arial Black", fontWeight: "bold" }}
                >
                  <h5 className={`alert alert-${this.state.message.type}`}>
                    {this.state.message.message}
                  </h5>
                </div>
              ) : (
                ""
              )}

              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <div className="text-center ">
                    <h3>Welcome {this.state.user.name} </h3>
                    <p>
                      Life is learning how to deal with traffic. It requires
                      patience, a good sense of timing, and sometimes not giving
                      in to the traffic but reshaping your life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col">
                <div className="card" style={{ backgroundColor: "#e8f5e9" }}>
                  <div className="card-body">
                    <img src={trpolice} alt="" width="100px" height="100px" />
                    <h4>My Offence</h4>
                    <p>
                      View the list of traffic violations done by me and fine
                      charged to me and pay
                    </p>
                    <Link to="/login-user" className="btn btn-primary">
                      More
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card" style={{ backgroundColor: "#e8f5e9" }}>
                  <div className="card-body">
                    <img src={central} alt="" width="125px" height="100px" />
                    <h4>Find Violation</h4>
                    <p>
                      Search the traffic violations by email, driving licence
                      and registration number
                    </p>
                    <Link to="/login-user" className="btn btn-primary">
                      More
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card" style={{ backgroundColor: "#e8f5e9" }}>
                  <div className="card-body">
                    <img src={common} alt="" width="125px" height="100px" />
                    <h4>Track Payment</h4>
                    <p>
                      Track the payment done by me with the transaction id of
                      the payment.
                    </p>
                    <Link to="/login-user" className="btn btn-primary">
                      More
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card" style={{ backgroundColor: "#e8f5e9" }}>
                  <div className="card-body">
                    <img src={amb} alt="" width="125px" height="100px" />
                    <h4>Register Medical Emergency</h4>
                    <p>Register medical emergency happend near you </p>
                    <Link to="/login-user" className="btn btn-primary">
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
              <div class="col ">
                {" "}
                <div
                  className="card"
                  style={{ backgroundColor: "#fafafa", height: "45vh" }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#82b1ff", color: "#ffffff" }}
                  >
                    <h4>Notifications</h4>
                  </div>
                  <div className="card-body">
                    <marquee behavior="scroll" direction="up" scrollamount="2">
                      <ul>
                        <a
                          href={file1}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            Office Order Regarding extension of service period
                            of Motor Vehicle Inspector
                          </li>
                        </a>
                        <a
                          href={file2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            MoM regarding issue of Fitness Certificate of Old
                            Sleeper Buses
                          </li>
                        </a>
                        <a
                          href={file3}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            Corrigendum-i for Empanelment for Development,
                            Customization deployment and Management of
                            State-Wide vehicle Tracking System.
                          </li>
                        </a>

                        <a
                          href={file4}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            Pre-Bid meeting proceeding of Smart Card based
                            Conductor License
                          </li>
                        </a>
                      </ul>
                    </marquee>
                  </div>
                </div>
              </div>
              <div class="col ">
                <div
                  className="card"
                  style={{ backgroundColor: "#fafafa", minHeight: "45vh" }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#9575cd", color: "#ffffff" }}
                  >
                    <h4>COVID-19</h4>
                  </div>
                  <div className="card-body">
                    <marquee behavior="scroll" direction="up" scrollamount="2">
                      <ul>
                        <a
                          href={covid}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            Revised press release related to List of Points to
                            be kept in mind while applying online for issuing
                            E-Pass
                          </li>
                        </a>
                        <a
                          href={covid}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            Press release for movement of Inerstate Intrastate
                            Bus during Health Safety Week
                          </li>
                        </a>
                        <a
                          href={covid}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>
                            SOP for movement of Private Commercial Vehicle
                            during Health Safety Week
                          </li>
                        </a>
                        <a
                          href={covid}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>Press Release for Interstate Bus Service</li>
                        </a>
                      </ul>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
            <div className="col">
              <img
                src={footerimg}
                alt=""
                style={{ width: "100vw", marginBottom: "50px" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
