import React from 'react'
import TeamMember from './TeamMember.jsx'

const TeamContainer = (props) => {
  // write logic that maps through the team members array that's been passed down as props
  // save this enumerable to a variable
  // for each member, return a <TeamMember> component

  let array = props.teamMembersArray.map((member) => {
    return (
      <TeamMember key={member.id} teamMemberInfo={member} exampleFunction={props.exampleFunction} updateTeamMemberData={props.updateTeamMemberData} />
    )
  })

  return <div className="card-container">{array}</div>
}

export default TeamContainer
