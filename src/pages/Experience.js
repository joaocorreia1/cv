import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="experience">
      <h2 className="experience-title">Experience</h2>
      <ul>
        <li>
          <h3>Jr React Developer</h3>
          <h5>Opah IT - Remote</h5>
          <h6>1 year</h6>
          <p>
            In a squad of eight people, using Scrum methodology, we developed the backoffice web
            application and the mobile application for a company in the industrial sector. In this
            project I focused on web development with React, Styled Components and Material UI.
            Building and integrating the screens coming from the design team via Figma. I also had
            contact with the backend implementing integrated tests with Jest. And also with mobile
            development, implementing tests again but this time End-to-End, using Jest in React
            Native.
          </p>
        </li>
        <li>
          <h3>Jr Frontend Developer</h3>
          <h5>Tecla T - Remote</h5>
          <h6>5 months</h6>
          <p>
            I participated in the frontend construction of three different web projects coding in
            HTML, CSS and javascript to perform the tasks available in the Kanban board.
          </p>
        </li>
        <li>
          <h3>Commercial Analyst</h3>
          <h5>Instituto Trabalho e Vida</h5>
          <h6>5 years</h6>
          <p>
            Production of technical seminars within the sector of labor relations, safety and
            health. Dissemination of events in the media, sponsorship negotiation, purchases in
            general, organization of post-event competencies to fulfill the company's
            responsibilities towards participants/partners and staff training to perform these
            functions.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
