import React from "react";
import "../Styles/AboutTeam.css";
import koya from "../Components/Assets/TeamMembers/Taiwo.jpg";

const AboutTeamTaiwo = () => {
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
            <h1>Adebayo Taiwo</h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Taiwo</b> has over 15 years experience in the construction
            industry. She completed a Post-Graduate Diploma in Mechanical
            Engineering from Federal University of Technology, Akure. She is a
            COREN registered engineer. Taiwo was the Lead Mechanical consulatant
            for OJ&T Consulting before joining Walk Projects, she has carved a
            niche for herself in the industry. She has managed & completed a
            numbers of high end projects in key areas such as Residential
            Estates, Hospitality, Educational facilities, High-rise Residentials
            & Office Buildings.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTeamTaiwo;
