import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchParis } from './redux/actions';

function Paris() {
  const data = useSelector((state) => state.paris)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchParis());
  }, []);
  return (
    <div>
      <ul>
        <li>{data.co}</li>
        <li>{data.nh3}</li>
        <li>{data.no}</li>
        <li>{data.no2}</li>
        <li>{data.o3}</li>
        <li>{data.pm2_5}</li>
        <li>{data.pm10}</li>
        <li>{data.so2}</li>

      </ul>

      {
        console.log(data)
      }
    </div>
  )
}

export default Paris