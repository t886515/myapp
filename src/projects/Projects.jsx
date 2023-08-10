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

const projectsData = [
  {
    imgSrc:
      "https://lina-personal-website-static-images.s3.amazonaws.com/THD_logo.jpg",
    content: (
      <>
        <span>
          Integrated Slack API with Home Depot's internal browser testing
          framework to provide continuous error report monitoring.
        </span>
        <span>
          Implemented Concourse CI/CD pipelines for continuous automated
          functional and end-to-end testing of B2C site across all devices and
          major browsers.
        </span>
        <span>
          Integrated third-party MobileLabs to internal testing framework to
          allow automation test on real mobile devices on CI/CD pipelines.
        </span>
        <span>
          Designed and optimized browser test report data structure to enable
          flexible use of nesting test suites for Selenium/Webdriver.io and
          Mocha browser tests.
        </span>
        <span>
          Implemented GraphQL with Apollo and Express server for internal tool's
          Graphical User Interface backend.
        </span>
        <span>
          Designed and built interactive Graphical User Interface of Home
          Depot's internal browser testing tool using Vue.js, Apollo and
          D3/nvd3.
        </span>
      </>
    ),
  },
  {
    imgSrc:
      "https://lina-personal-website-static-images.s3.amazonaws.com/THD_logo.jpg",
    content: "some content",
  },
];

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectTransitionWrapper>
        {projectsData.map(({ imgSrc, content }, index) => (
          <Project key={index} imgSrc={imgSrc} content={content} />
        ))}
      </ProjectTransitionWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
