import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="footer_contents">
          <h6>
            {new Date().getFullYear()} Copyright &copy; www.eSeva.gov. All
            rights reserved!
          </h6>
        </div>
      </div>
    );
  }
}
