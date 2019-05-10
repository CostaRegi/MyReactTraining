import React from "react";
import "./ProjectCard.css";
import git from "../Git.svg";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="box">
        <p>{this.props.projectTitle}</p>
        <article>{this.props.projectBriefDescription}</article>
        <div id="media">
          <a href="">
            <img src={git} />
          </a>
        </div>
      </div>
    );
  }
}

/*ProjectCard.prototype = {
    projectTitle: React.PropTypes.string.isRequired,
    projectBriefDescription: React.PropTypes.string.isRequired
}
*/

export default ProjectCard;
