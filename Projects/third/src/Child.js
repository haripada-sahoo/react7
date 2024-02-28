import React from 'react'

export default function Child(props) 
{

    console.log(this.props) 

  return (
    <div>
      <p>My name is {props.na}</p>
      <p>My age is {props.age}</p>
    </div>
  )
}
