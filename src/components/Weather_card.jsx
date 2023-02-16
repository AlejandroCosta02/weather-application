import React from 'react'

function Weather_card(props) {
  return (
    <div>
        <h3>{`You city is: ${props.dataCityName}`}</h3>
        <p>temp:</p>
        <p>min temp:</p>
        <p>max temp:</p>
        <p>humidity:</p>
    </div>
  )
}

export default Weather_card