import React from "react";
import AboutTeamKoya from "./AboutTeamKoya";
import AboutTeamWale from "./AboutTeamWale";
import AboutTeamTaiwo from "./AboutTeamTaiwo";
import AboutTeamAdmin from "./AboutTeamAdmin";

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
        <AboutTeamAdmin />
      </section>
    </>
  );
};

export default AboutTeam;
