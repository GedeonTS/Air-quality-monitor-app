import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Paris() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      title="PARIS"
      CO={data[0].co}
      NH3={data[0].nh3}
      N0={data[0].no}
      NO2={data[0].no2}
      O3={data[0].o3}
      PM2_5={data[0].pm2_5}
      PM10={data[0].pm10}
      SO2={data[0].so2}
    />
  );
}

export default Paris;
