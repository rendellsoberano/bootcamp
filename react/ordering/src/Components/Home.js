import React, { Component } from "react";
import "../css/styles-home.css";
class Home extends Component {
  render() {
    return (
      <div id="home_content">
        <h1>Welcome to OSO Resto</h1>
        <button class="btn btn-primary">Order Now!</button>
      </div>
    );
  }
}

export default Home;
