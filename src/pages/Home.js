import React from "react";
import "./home.css";
import ProfilePicture from "../components/ProfilePicture"

function Home() {
  return (
    <div className="home-container">
      <ProfilePicture />
      <h2>Projetos</h2>
      <div></div>
    </div>
  );
}

export default Home;
