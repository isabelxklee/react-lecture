import React from 'react'

const TeamContainer = (props) => {
  let teamArray = props.teamMembers.map(() => {
    return "hello, world"
  })

  return (
    <>
      {teamArray}
    </>
  )
}
 
export default TeamContainer