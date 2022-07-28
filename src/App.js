import logo from './logo.svg';
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7fa1ffefae0fc913a48d0811b2e0ffe8
    `
    const searchlocation  = (event) => {
      if (event.key === "Enter") {
        axios.get(url).then((response) => {
         setdata(response.data)
         console.log(response.data)
        })
        setlocation(' ')
      }
    }
    return (
    <div className="app">
       <div className="search">
        <input
          value={location}
          onChange={event => setlocation(event.target.value)}
          onKeyPress={searchlocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          
            </div>
            <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}

              </div>
              <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}

                </div>
                <div className='bottom'>
          <div className='feels'>
           {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
           <p>Feels Like</p>
                </div>
                <div className='humidity'>
                  {data.main ? <p className='bold'>{data.main.humidity} %</p>: null}
                  <p className='bold'>Humidity</p>

                </div>
                <div className='winds'>
                  {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null }
                  <p className='bold'>Wind speed</p>
                </div>
                </div>

        </div>
      </div>

      
    </div>
  );
}

export default App;
