import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function Barcelona(props) {
  const { hider } = props;
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      hider={hider}
      title="BARCELONA"
      image="barcelona"
      CO={data[5] ? data[5].co : ''}
      NH3={data[5] ? data[5].nh3 : ''}
      N0={data[5] ? data[5].no : ''}
      NO2={data[5] ? data[5].no2 : ''}
      O3={data[5] ? data[5].o3 : ''}
      PM2_5={data[5] ? data[5].pm2_5 : ''}
      PM10={data[5] ? data[5].pm10 : ''}
      SO2={data[5] ? data[5].so2 : ''}
    />
  );
}

export default Barcelona;
