import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Rome() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      title="ROME"
      CO={data[4].co}
      NH3={data[4].nh3}
      N0={data[4].no}
      NO2={data[4].no2}
      O3={data[4].o3}
      PM2_5={data[4].pm2_5}
      PM10={data[4].pm10}
      SO2={data[4].so2}
    />
  );
}

export default Rome;
