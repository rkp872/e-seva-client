import React, { Component } from "react";
import CentralRoomService from "../../services/CentralRoomService";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class FineDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      pending: "",
      paid: "",
    };
  }
  componentDidMount() {
    document.title = "E-Seva | Fine Details";
    CentralRoomService.getFineDetails()
      .then((res) => {
        this.setState({ total: this.currencyFormat1(res.data.totalFine) });
        this.setState({ pending: this.currencyFormat1(res.data.pendingFine) });
        this.setState({ paid: this.currencyFormat1(res.data.paidFine) });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }
  currencyFormat1(id) {
    var x;
    x = id.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
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
            <div className="col-md-2 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <h3 className="text-center">Total Fine</h3>
                  <Link to="/central-room/total-fine-details">
                    <h4 className="text-center"> &#8377; {this.state.total}</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <h3 className="text-center">Pending Fine</h3>
                  <Link to="/central-room/pending-fine-list">
                    <h4 className="text-center">
                      &#8377; {this.state.pending}
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 offset-md-1">
              <div className="card shadow-lg p-2 bg-white rounded mt-5">
                <div className="card-body">
                  <h3 className="text-center">Paid Fine</h3>
                  <Link to="/central-room/paid-fine-list">
                    <h4 className="text-center">&#8377; {this.state.paid}</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
