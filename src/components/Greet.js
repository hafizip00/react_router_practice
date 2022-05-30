import React from 'react'

function Greet(props) {

    const {name , nick} = props
  return (
    <div>{name} {nick}</div>
  )
}

export default Greet