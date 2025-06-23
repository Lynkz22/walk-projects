import React from "react";
import "../Styles/AboutTeam.css";
import koya from "../Components/Assets/TeamMembers/Wale.jpg";

const AboutTeamWale = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Koya Oluwasegun "
              src={koya}
            />
          </div>
          <div className="teamMembersName">
            <h1>Olatundun Wale</h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Wale</b> has over 10 years experience in the construction
            industry. He completed a bachelor in Electrical/Electronics
            Engineering from Osun State University, and he his a coporate member
            of Nigerian Society of Engineers. He his a COREN registered
            engineer. Wale worked in a Building services consultancy firm as a
            Lead Electrical design/project engineer, he has carved a niche for
            himself in the industry. He also managed vast numbers of high end
            projects in key areas such as Hospitality, Educational facilities,
            Residentials & Office Buildings.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTeamWale;
