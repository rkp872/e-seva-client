import React, { Component } from "react";
import CentralRoomService from "../../services/CentralRoomService";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import "./style.css";
import { Link } from "react-router-dom";

export default class HelpRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "Pending",
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    document.title = "E-Seva | Help Request";
    this.getData();
  }

  getData() {
    console.log("Filter : ", this.state.filter);
    CentralRoomService.getAllHelpRequests(this.state.filter)
      .then((res) => {
        var data = res.data;
        console.log("Data : ", data);
        var slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: res.data,
          tableData: slice,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.getData();
    }
  }

  render() {
    return (
      <>
        <Header />

        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-8 offset-md-2  mt-5">
              <div className="row">
                <p
                  style={{
                    fontFamily: "Arial Black",
                    fontWeight: "bold",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  Filter :
                </p>
                <div className="col-md-4">
                  <select
                    className="form-control form-select-lg mb-3 inp"
                    aria-label=".form-select-lg example"
                    defaultValue={"Pending"}
                    onChange={(e) => {
                      this.setState({ filter: e.target.value });
                    }}
                  >
                    <option className="form-group" value="All">
                      All
                    </option>
                    <option value="Pending" className="form-group">
                      Pending
                    </option>
                    <option value="Assigned" className="form-group">
                      Assigned
                    </option>
                    <option value="Served" className="form-group">
                      Served
                    </option>
                  </select>
                </div>
              </div>
              <div class="table-responsive text-nowrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Requested By</th>
                      <th>Location</th>
                      <th>Info</th>
                      <th>Status</th>
                      {this.state.filter === "Pending" ? (
                        <th>Action</th>
                      ) : this.state.filter === "Assigned" ? (
                        <th>Assigned To</th>
                      ) : this.state.filter === "Served" ? (
                        <th>Served By</th>
                      ) : (
                        ""
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((tdata, i) => (
                      <tr>
                        <td>{tdata.requestedBy.name}</td>
                        <td>{tdata.location}</td>
                        <td>{tdata.info}</td>
                        <td>{tdata.status}</td>
                        {this.state.filter === "Pending" ? (
                          <td>
                            <Link
                              to={{
                                pathname: "/central-room/serve-help-request",
                                data: tdata,
                              }}
                            >
                              Serve
                            </Link>
                          </td>
                        ) : this.state.filter === "Assigned" ? (
                          <td>
                            {tdata.servedBy ? (
                              <Link
                                to={{
                                  pathname:
                                    "/central-room/traffic-police-profile",
                                  data: tdata.servedBy,
                                }}
                              >
                                {tdata.servedBy.name}
                              </Link>
                            ) : (
                              ""
                            )}
                          </td>
                        ) : this.state.filter === "Served" ? (
                          <td>
                            {" "}
                            {tdata.servedBy ? (
                              <Link
                                to={{
                                  pathname:
                                    "/central-room/traffic-police-profile",
                                  data: tdata.servedBy,
                                }}
                              >
                                {tdata.servedBy.name}
                              </Link>
                            ) : (
                              ""
                            )}
                          </td>
                        ) : (
                          ""
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="container " style={{ marginLeft: "225px" }}>
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
