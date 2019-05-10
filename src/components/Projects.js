import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "ToDo App",
          description:
            "This is a simple to do app that I've build to practice creating components, updating dom, and managing states in react."
        },
        {
          id: 2,
          title: "Recipe sharing",
          description:
            "This main function of this app is to store and share recepies with friends. In this app I've practiced backend integration, also created by me."
        },
        {
          id: 3,
          title: "Movie Search",
          description:
            "This main function of this app is use the open movie api and search movies. In this app I practice external API interaction."
        },
        {
            id: 4,
            title: "My Country",
            description:
              "In this project I'll try to present to you my home country and the amazing things it has to offer to it's visitors"
          },

          {
            id: 5,
            title: "My Portofolio",
            description:
              "In this project I'll try to present you my self."
          }
      ]
    };
  }

  render() {
    let items = this.state.items;
    return (
      <div className="grid">
        {items.map(item => (
          <ProjectCard
            key={item.id}
            projectTitle={item.title}
            projectBriefDescription={item.description}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
