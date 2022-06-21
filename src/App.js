import React from 'react'
import axios from 'axios'

function App() {
  return (
    <div>
      {
        axios.get('http://api.openweathermap.org/data/2.5/air_pollution?lat=48.6&lon=2.3&appid=f1d8a4d595c7a03c5224b9f44ae09d6d').then(res=>console.log(res.data))
      }
    </div>
  )
}

export default App