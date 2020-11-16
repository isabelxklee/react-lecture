import React from 'react'
import TeamMember from './TeamMember.jsx'

const TeamContainer = ({teamMembers, updateMember, deleteMember}) => (
  <div id="team-container">
    {teamMembers.map((member) => (
      <TeamMember 
        key={member.id}
        teamMember={member}
        updateMember={updateMember}
        deleteMember={deleteMember}
      />
    ))}
  </div>
)

export default TeamContainer