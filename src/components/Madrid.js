import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Madrid() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      title="MADRID"
      CO={data[3].co}
      NH3={data[3].nh3}
      N0={data[3].no}
      NO2={data[3].no2}
      O3={data[3].o3}
      PM2_5={data[3].pm2_5}
      PM10={data[3].pm10}
      SO2={data[3].so2}
    />
  );
}

export default Madrid;
