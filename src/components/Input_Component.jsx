import React from 'react'

function Input_Component(props) {
  return (
    <input 
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        placeholder={props.placeholder}/>
  )
}

export default Input_Component