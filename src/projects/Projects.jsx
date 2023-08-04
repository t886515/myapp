import React from "react";
import style from "styled-components";
import Project from "./Project.jsx";
import Project2 from "./Project2.jsx";
import { FlexWrapper, colors, FadeInTransition } from "../common/share_styles";

const ProjectsWrapper = style.div`
  background-color: ${colors.grey1};
`;

const ProjectTransitionWrapper = style(FadeInTransition)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectTransitionWrapper>
        <Project />
        <Project2 />
      </ProjectTransitionWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
