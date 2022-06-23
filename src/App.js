import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './components/redux/actions';
import Home from './components/Home';
import Paris from './components/Paris';
import Warsaw from './components/Warsaw';
import Barcelona from './components/Barcelona';
import Rome from './components/Rome';
import Lisbon from './components/Lisbon';
import Madrid from './components/Madrid';
import London from './components/London';
import Brussels from './components/Brussels';

import './App.css';

function App() {
  const coord = useSelector((state) => state.coord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Routes>
      <Route path="/paris" element={<Paris />} />
      <Route path="/Warsaw" element={<Warsaw />} />
      <Route path="/Barcelona" element={<Barcelona />} />
      <Route path="/Rome" element={<Rome />} />
      <Route path="/Lisbon" element={<Lisbon />} />
      <Route path="/Madrid" element={<Madrid />} />
      <Route path="/London" element={<London />} />
      <Route path="/Brussels" element={<Brussels />} />
      <Route path="/" element={<Home coord={coord} />} />
    </Routes>
  );
}

export default App;
