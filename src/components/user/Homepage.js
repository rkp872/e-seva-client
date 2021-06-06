import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import bgRight from "../../resources/img/bgRight.png";
import Carousel from "../carousel/Carousel";
import footerimg from "../../resources/img/footerimg.png";
import trpolice from "../../resources/img/trpolice.jpg";
import amb from "../../resources/img/amb.jpg";
import central from "../../resources/img/central.jpg";
import common from "../../resources/img/common.jpg";
import file1 from "../../resources/docs/file1.pdf";
import file2 from "../../resources/docs/file2.pdf";
import file3 from "../../resources/docs/file3.pdf";
import file4 from "../../resources/docs/file4.pdf";
import covid from "../../resources/docs/covid.pdf";

export default class Homepage extends Component {
  componentDidMount() {
    document.title = "E-Seva | Home";
    //document.body.style = "background: #e6ffff;";
  }
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            backgroundColor: "#e6ffff",
          }}
        >
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Carousel />
            </div>
          </div>
          <div class="scroll-left">
            <p>
              Faceless Services have been launched. Citizens are not required to
              visit the RTO for availing any of these services.
            </p>
          </div>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col">
                <div className="card" style={{ backgroundColor: "#e8f5e9" }}>
                  <div className="card-body">
                    <img src={trpolice} alt="" width="100px" height="100px" />
                    <h4>Traffic Police</h4>
                    <p>
                      Register a Traffic Violations or Violators Register an
                      Emergency Request for SOS,Respond to Help requets
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
                    <h4>Central Room</h4>
                    <p>
                      View the dashboard of details such as Traffic Violations
                      Fine collected Send Help Team in case of SOS
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
                    <h4>Common People</h4>
                    <p>
                      View the traffic violance done, pay fine amount against
                      them, search for past traffic violations of self and
                      others
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
                    <h4>Ambulance Service</h4>
                    <p>
                      View and manage the medical emergency assigned, and
                      respond to them and change status of it.
                    </p>
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
                  style={{ backgroundColor: "#fafafa", minHeight: "45vh" }}
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
                        <a href={file1} target="_blank">
                          <li>
                            Office Order Regarding extension of service period
                            of Motor Vehicle Inspector
                          </li>
                        </a>
                        <a href={file2} target="_blank">
                          <li>
                            MoM regarding issue of Fitness Certificate of Old
                            Sleeper Buses
                          </li>
                        </a>
                        <a href={file3} target="_blank">
                          <li>
                            Corrigendum-i for Empanelment for Development,
                            Customization deployment and Management of
                            State-Wide vehicle Tracking System.
                          </li>
                        </a>

                        <a href={file4} target="_blank">
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
                        <a href={covid} target="_blank">
                          <li>
                            Revised press release related to List of Points to
                            be kept in mind while applying online for issuing
                            E-Pass
                          </li>
                        </a>
                        <a href={covid} target="_blank">
                          <li>
                            Press release for movement of Inerstate Intrastate
                            Bus during Health Safety Week
                          </li>
                        </a>
                        <a href={covid} target="_blank">
                          <li>
                            SOP for movement of Private Commercial Vehicle
                            during Health Safety Week
                          </li>
                        </a>
                        <a href={covid} target="_blank">
                          <li>Press Release for Interstate Bus Service</li>
                        </a>
                      </ul>
                    </marquee>
                  </div>
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
      </>
    );
  }
}
