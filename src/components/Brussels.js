import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { fetchData } from './redux/actions';

function Brussels() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Stack gap={0} className="main-container">
      <div className=" secondary-layer control"><Link to="/" className="arrow"><IoIosArrowBack /></Link></div>
      <div className=" h-15 first-layer" style={{ background: 'linear-gradient(#e66465, #9198e5)' }}>BRUSSELS</div>
      <div className=" secondary-layer description">CITY&apos;S AIR COMPOSITION DATA</div>
      <div className=" secondary-layer">
        <div>co:</div>
        <div>{data[7].co}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>NH3:</div>
        <div>{data[7].nh3}</div>
      </div>
      <div className=" secondary-layer">
        <div>NO:</div>
        <div>{data[7].no}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>NO2:</div>
        <div>{data[7].no2}</div>
      </div>
      <div className=" secondary-layer">
        <div>O3:</div>
        <div>{data[7].o3}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>PM2_5:</div>
        <div>{data[7].pm2_5}</div>
      </div>
      <div className=" secondary-layer">
        <div>PM10:</div>
        <div>{data[7].pm10}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>SO2:</div>
        <div>{data[7].so2}</div>
      </div>
    </Stack>
  );
}

export default Brussels;
