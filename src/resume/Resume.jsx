import React from "react";
import { H1, H3, FadeInTransition } from "../common/share_styles.js";
import "./resume.css";

function Resume() {
  return (
    <div>
      <br />
      <br />
      <H1>Resume</H1>
      <br />
      <hr />
      <br />
      <div>
        <div>
          <H3>Technical Skills</H3>
        </div>
        <FadeInTransition>
          <div className="resume-right">
            <br />
            <b>Strong</b>
            <br />
            JavaScript, CSS/HTML, AngularJS, React.js, Express.js, Mongoose,
            MongoDB, Git
            <br />
            <b>Experienced</b>
            <br />
            Java, Python, Node.js, MySQL
          </div>
        </FadeInTransition>
      </div>

      <br />
      <hr />
      <br />

      <div className="development-exp">
        <div>
          <H3>Applications</H3>
        </div>
        <FadeInTransition>
          <div className="resume-right">
            <span>
              Mindflare - Front-End Software Engineer
              <br />
              <a href="http://mindflare.me/">http://mindflare.me/</a>
              <br />
              A productivity app that uses a tree data structure to allow users
              to create a visualization of ideas
              <br />
              Designed NoSQL database schema using Mongoose ORM to organize data
              type, data relationship, and data storage efficiently
              <br />
              Utilized React.js with D3 to display an interactive visualization
              of static tree data
              <br />
              Implemented tree traversal algorithms to manipulate nodes in the
              tree data structure
            </span>
            <br />
            <hr />
            <br />
            <span>
              Concreet - Front-End Software Engineer
              <br />
              <a href="http://www.concreet.date/">http://www.concreet.date/</a>
              <br />
              A calendar manager app that allows users to check for attendees’
              available hours and send event invitations
              <br />
              Constructed overall front-end structure using React.js framework
              for an optimal user experience
              <br />
              Set up client to server Ajax requests for user authentication and
              calendar data retrieval
              <br />
              Designed intuitive UI for contact and group management with CSS
              styling and Font Awesome library
            </span>

            <br />
            <hr />
            <br />
            <span>
              Student Selector - Full-Stack Software Engineer
              <br />
              <a href="https://github.com/t886515/random-selector">
                https://github.com/t886515/random-selector
              </a>
              <br />
              A tool that allows users to store student data and to randomly
              select or group students in the classroom
              <br />
              Architected front-end and back-end structure of the application
              implementing AngularJS and Express.js
              <br />
              Integrated Mongo database and Express.js to ensure data
              persistency
              <br />
              Implemented efficiency algorithm for random selection and random
              group selection
            </span>
          </div>
        </FadeInTransition>
      </div>

      <br />
      <hr />
      <br />

      <div>
        <div>
          <H3>Education</H3>
        </div>
        <FadeInTransition>
          <div className="resume-right">
            University of Texas at Austin - Bachelor of Chemistry --- Austin,
            Texas 2010 - 2014
            <br />
            Austin Community College - Computer Science (APT) --- Austin, Texas
            2016 - 2017
            <br />
            Hack Reactor - Advanced Software Engineering Immersive --- Austin,
            Texas 2017
          </div>
        </FadeInTransition>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Resume;
