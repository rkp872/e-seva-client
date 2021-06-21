import React, { Component } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import CommonPeopleService from "../../services/CommonPeopleService";

export default class MyOffence extends Component {
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
    document.title = "E-Seva | Offence";
    this.getData();
  }
  getData() {
    CommonPeopleService.getOwnTrafficViolation(this.state.filter)
      .then((res) => {
        var data = res.data;

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
            <div className="col-md-8 offset-md-2 mt-5">
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
                    <option value="Paid" className="form-group">
                      Paid
                    </option>
                  </select>
                </div>
              </div>
              <div class="table-responsive text-nowrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Registration Number</th>
                      <th>Vehicle Type</th>
                      <th>Location</th>

                      <th>Fine</th>
                      <th>Status</th>
                      {this.state.filter === "Pending" ? <th>Action</th> : ""}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((tdata, i) => (
                      <tr>
                        <td>
                          <Link
                            to={{
                              pathname:
                                "/central-room/traffic-violator-details",
                              data: tdata,
                            }}
                          >
                            {tdata.name}
                          </Link>
                        </td>
                        <td>{tdata.registrationNumber}</td>
                        <td>{tdata.vehicleType}</td>
                        <td>{tdata.location}</td>

                        <td>{tdata.trafficViolationTypes.fineAmount}</td>
                        <td>{tdata.paymentStatus}</td>
                        <td>
                          {this.state.filter === "Pending" ? (
                            <Link
                              to={{
                                pathname: "/common-people/payment-gateway",
                                data: tdata,
                              }}
                            >
                              Pay
                            </Link>
                          ) : (
                            ""
                          )}
                        </td>
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
