// TeamMemberCard.js
import React from 'react';
import '../style/TeamMemberCard.css'; // Import CSS for this component
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

function TeamMemberCard({ member }) {
  return (
    <div className="team-member-card">
      {/* <img src={require(`./images/${member.image}`).default} alt={member.name} /> */}
      <img src={member.image} alt={member.name} />

      <div className="member-details">
        <h2>{member.name}</h2>
        <h3>{member.position}</h3>
        <p>{member.bio}</p>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      </div>
    </div>
  );
}

export default TeamMemberCard;
