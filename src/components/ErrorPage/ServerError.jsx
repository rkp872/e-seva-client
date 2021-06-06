import React, { Component } from "react";
import error from "../../resources/img/404Error.jpg";
import Header from "./../user/Header";

export default class ServerError extends Component {
  componentDidMount() {
    document.title = "E-Seva | Server Error";
  }
  render() {
    //404Error.jpg
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 offset-2">
                      <div
                        className="text-center"
                        style={{ marginTop: "30px" }}
                      >
                        <h1
                          style={{
                            fontFamily: "Arial Black",
                            fontSize: "100px",
                          }}
                        >
                          500
                        </h1>
                        <h2
                          style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "50px",
                          }}
                        >
                          Internal Server Error
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-4 offset-2">
                      <img
                        src={error}
                        alt=""
                        style={{ height: "350px", width: "200px" }}
                      />
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
