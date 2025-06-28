import React from "react";
import "../Styles/AboutTeam.css";
import Admin from "../Components/Assets/TeamMembers/Admin.jpg";

const AboutTeamAdmin = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img className="teamMembersImage" alt="Admin " src={Admin} />
          </div>
          <div className="teamMembersName">
            <h1>Koya Eniola </h1>
            <p>Administrative Lead</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Eniola</b> holds a Bachelor's degree in French and International
            Studies from Osun State University and a Masters in Business
            Administration from Nexford University, Washington DC, United States
            of America. She also has a certification in Human Resource Business
            Professional "HRBP". Eniola is a diligent and highly proficient
            admistrative professional in qualiity assurance,supporting and
            devising strategies to effectively run an organization.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTeamAdmin;
