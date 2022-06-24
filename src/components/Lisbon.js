import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Lisbon() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      title="LISBON"
      CO={data[2].co}
      NH3={data[2].nh3}
      N0={data[2].no}
      NO2={data[2].no2}
      O3={data[2].o3}
      PM2_5={data[2].pm2_5}
      PM10={data[2].pm10}
      SO2={data[2].so2}
    />
  );
}

export default Lisbon;
