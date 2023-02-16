import './App.css';
import React, {useState} from 'react';
import Weather from './components/Weather';
import Weather_card from './components/Weather_card';
function App() {
  const [dataGet, setDataGet] = useState('')
  const handleDataGet = (data) => {
    setDataGet(data)
  }
  return (
    <div className="App">
      <h1>weather app</h1>
      <Weather onSubmit={handleDataGet}/>
      <Weather_card dataCityName={dataGet}/>
    </div>
  );
}

export default App;
