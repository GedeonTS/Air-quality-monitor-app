import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Warsaw(props) {
  const { hider } = props;
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      hider={hider}
      title="WARSAW"
      image="warsaw"
      CO={data[6] ? data[6].co : ''}
      NH3={data[6] ? data[6].nh3 : ''}
      N0={data[6] ? data[6].no : ''}
      NO2={data[6] ? data[6].no2 : ''}
      O3={data[6] ? data[6].o3 : ''}
      PM2_5={data[6] ? data[6].pm2_5 : ''}
      PM10={data[6] ? data[6].pm10 : ''}
      SO2={data[6] ? data[6].so2 : ''}
    />
  );
}

export default Warsaw;
