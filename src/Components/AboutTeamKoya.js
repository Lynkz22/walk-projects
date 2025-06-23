import React from "react";
import "../Styles/AboutTeam.css";
import koya from "../Components/Assets/TeamMembers/Koya.jpg";

const AboutTeamKoya = () => {
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
            <h1>
              Koya Oluwasegun <br /> Samuel
            </h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Oluwasegun</b> has been part of the Construction industry for
            more than a decade. He completed a bachelor in Mechanical
            Engineering from the prestigeous Obafemi Awolowo University, and has
            been inducted into the Nigerian Society of Engineers. He his a COREN
            registered engineer. Segun worked in a OJ&T Consulting as a Lead
            mechanical design/project engineer and he managed vast number of
            high end projects. His building services experience includes Grade
            "A" office buildings, High-end hotels, Multi-residence high-rise
            apartments, Airplane maintenance hanger, Hospitals, 300-500units
            residential apartment estate & educational facilities including
            olympic size swimming pools.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTeamKoya;
