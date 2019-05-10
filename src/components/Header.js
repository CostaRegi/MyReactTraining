import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="branding">
          <h1>
            <a href="..">Reginaldo's</a> Projects
          </h1>
        </div>
        <nav id="main_nav">
          <ul id="links">
            <li><a href="..">Home</a></li>
            <li><a href="..">About</a></li>
            <li><a href="..">Learnings</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
