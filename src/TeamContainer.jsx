import React from 'react'
import TeamMember from './TeamMember.jsx'

const TeamContainer = (props) => {
  let teamArray = props.teamMembers.map((member) => {
    return <TeamMember key={member.id} teamMember={member} updateMember={props.updateMember}/>
  })

  return (
    <div className="card-container">
      {teamArray}
    </div>
  )
}
 
export default TeamContainer