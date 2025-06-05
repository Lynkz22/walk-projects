import React from "react";
import AboutTeamKoya from "./AboutTeamKoya";
import AboutTeamWale from "./AboutTeamWale";
import AboutTeamTaiwo from "./AboutTeamTaiwo";

const AboutTeam = () => {
  return (
    <>
      <section className="sectionTeam">
        <div className="divTeamMembers">
          <h1 className="divTeamMembersHeading">OUR TEAM MEMBERS</h1>
        </div>
        <AboutTeamKoya />
        <AboutTeamWale />
        <AboutTeamTaiwo />
      </section>
    </>
  );
};

export default AboutTeam;
