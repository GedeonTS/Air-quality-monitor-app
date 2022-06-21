import React from 'react'
import axios from 'axios'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Paris from './components/Paris';
import './App.css'


// {
//   axios.get('http://api.openweathermap.org/data/2.5/air_pollution?lat=48.6&lon=2.3&appid=f1d8a4d595c7a03c5224b9f44ae09d6d').then(res=>console.log(res.data))
// }


function App() {
  return (
    <Routes>
      <Route path="/paris" element={<Paris/>}/>
      <Route path="/" element={<Home/>}/>
  </Routes>
  )
}

export default App