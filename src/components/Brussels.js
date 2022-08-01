import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Brussels(props) {
  const { hider } = props;
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      hider={hider}
      title="BRUSSELS"
      image="brussels"
      CO={data[7] ? data[7].co : ''}
      NH3={data[7] ? data[7].nh3 : ''}
      N0={data[7] ? data[7].no : ''}
      NO2={data[7] ? data[7].no2 : ''}
      O3={data[7] ? data[7].o3 : ''}
      PM2_5={data[7] ? data[7].pm2_5 : ''}
      PM10={data[7] ? data[7].pm10 : ''}
      SO2={data[7] ? data[7].so2 : ''}
    />
  );
}

export default Brussels;
