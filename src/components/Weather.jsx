import React, {useState} from 'react'
import Weather_card from './Weather_card'
function Weather(props) {
   const [input, setInput] = useState('')
   const handleInput = (e) => {
         setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleClick = () => {
        props.onSubmit(input)
    }
  return (
    <div>
        <h1>Weather</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" name="city" placeholder="City..."/>
            <button onClick={handleClick}>submits</button>
        </form>
    

    </div>
  )
}

export default Weather