import React from 'react'

function Card_Weather(props) {

  return (
    <div className="container">
        <div className="top">
          <div className="location">
            <p>{props.dataName}</p>
          </div>
          <div className="temp">
            {props.dataTemp}
          </div>
          <div className="description">
            {props.dataDesc}
          </div>
        </div>

        {props.dataFinal}

      </div>
  )
}

export default Card_Weather