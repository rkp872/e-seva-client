import React, { Component } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
export default class FindViolationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    document.title = "E-Seva | Find Violation";
    this.getData();
  }
  getData() {
    const res = this.props.location.data;

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
  }
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-8 offset-2">
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
                      <th>Action</th>
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
                          <Link
                            to={{
                              pathname: "/common-people/payment-gateway",
                              data: tdata,
                            }}
                          >
                            Pay
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
        </div>
      </>
    );
  }
}
