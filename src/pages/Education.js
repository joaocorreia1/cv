import React from "react";
import "./education.css";

function Education() {
  return (
    <div className="education">
      <h2 className="education-title">Education</h2>
      <ul>
        <li>
          <h3>FAM - Faculdade das Américas</h3>
          <h5>Bachelor's degree, Computer Science</h5>
          <p>
            Computer science degrees generally aim to teach you the basic mathematical and
            scientific concepts behind computers and their programs. A degree in computer science
            can have you designing software and hardware, learning programming languages, data
            structures, and artificial intelligence concepts. Computer science degrees might require
            mathematics, statistics, or engineering courses.
          </p>
        </li>
        <li>
          <h3>Universidade Anhembi Morumbi</h3>
          <h5>Bachelor's degree, Business Administration</h5>
          <p>
            The Bachelor of Business Administration (BBA) is one of the most marketable and
            in-demand undergraduate degrees. Nearly every form of employment is related to a
            business organization, and understanding the field of business can be beneficial to your
            career.
          </p>
        </li>
        <li>
          <h3>Labenu - Sao Paulo</h3>
          <h5>Full-stack web development</h5>
          <p>
            More than 1000 hours of experience. This is the development course Labenu's Web Full
            Stack. All this over 6 months and with a Routine of at least 8 hours a day. In addition
            to the technical part, choice with agile methodologies, group work and diverse other
            socioemotional skills.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
