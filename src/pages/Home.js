import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <ProfilePicture />
      <div className="wellcome" id="wellcome">
        <h2>Wellcome to my CV!</h2>
        <p>Use the above navbar to navigate throw my history.</p>
      </div>
    </div>
  );
}

export default Home;
