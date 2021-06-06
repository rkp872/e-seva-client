import React, { Component } from "react";
import Header from "./Header";
import MedicalTeamServices from "../../services/MedicalTeamServices";
import ReactPaginate from "react-paginate";

export default class AmbulanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
      medicalEmergency: this.props.location.data,
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
    document.title = "E-Seva | Ambulance";
    this.getData();
  }
  getData() {
    MedicalTeamServices.getAmbulance(this.state.filter)
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
            <div className="col-md-6 offset-md-3">
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
                    <option value="Assigned" className="form-group">
                      Assigned
                    </option>
                    <option value="Free" className="form-group">
                      Free
                    </option>
                  </select>
                </div>
              </div>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DL Number</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((tdata, i) => (
                    <tr>
                      <td>{tdata.name}</td>
                      <td>{tdata.email}</td>

                      <td>{tdata.drivingLicenceNumber}</td>
                      <td>{tdata.status}</td>
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
      </>
    );
  }
}
