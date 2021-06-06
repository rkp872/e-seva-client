import React, { Component } from "react";
import CentralRoomService from "../../services/CentralRoomService";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import "./style.css";
import { Link } from "react-router-dom";
import searchImg from "../../resources/img/search.jpg";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default class TrafficViolatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      isOpen: false,
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
    document.title = "E-Seva | Traffic Violation";
    this.getData();
  }
  getData() {
    CentralRoomService.getAllTrafficViolator()
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
  customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  searchTrafficViolator = (value) => {
    CentralRoomService.searchTrafficViolator(value).then((res) => {
      this.setState({ searchResult: res.data });
    });
  };
  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="row">
                <div className="col-md-2">
                  <div className="container mt-5">
                    <button
                      className="btn"
                      onClick={() => this.setState({ isOpen: true })}
                    >
                      <img
                        src={searchImg}
                        alt=""
                        style={{ height: "40px", width: "80px" }}
                      />
                    </button>
                  </div>
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
        <div>
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={() =>
              this.setState({ isOpen: false, searchResult: [] })
            }
            style={this.customStyles}
          >
            <div
              className="container"
              style={{ width: "500px", height: "200px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onKeyUp={(e) => {
                  this.searchTrafficViolator(e.target.value);
                }}
              />

              <ul className="search-ul">
                {
                  (console.log("Length : ", this.state.searchResult.length),
                  this.state.searchResult.map((item, index) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: "/central-room/traffic-violator-details",
                        data: item,
                      }}
                    >
                      <li>
                        <span className="fa fa-info-circle m-2"></span>
                        <span>{item.name}</span>{" "}
                        <span className="ml-3">{item.email}</span>
                      </li>
                    </Link>
                  )))
                }
              </ul>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}
