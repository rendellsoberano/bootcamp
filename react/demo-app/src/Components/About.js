import React, { Component } from "react";
import "../js/toggler";
import "../css/styles-about.css";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1">About Us</h1>
        <img
          src={require("../img/company.avif")}
          className="img-fluid"
          alt="CAD company meeting"
        />
        <p>The CAD Company was established 1988 as a result of Martial Law.</p>
        <button className="btn btn-primary" id="hide_para">
          Hide paragraph
        </button>
      </div>
    );
  }
}

export default About;
