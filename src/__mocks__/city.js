import React, { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import store from './store';

function city() {
 
  return (
    <Stack gap={0} className="main-container">
      <div className=" secondary-layer control"><Link to="/" className="arrow"><IoIosArrowBack /></Link></div>
      <div className=" h-15 first-layer" style={{ background: 'linear-gradient(#e66465, #9198e5)' }}>CITY</div>
      <div className=" secondary-layer description">CITY&apos;S AIR COMPOSITION DATA</div>
      <div className=" secondary-layer">
        <div>co:</div>
        <div>{store[0].list.co}</div>
      </div>
      <div className=" secondary-layer  link-1">
        <div>NH3:</div>
        <div>{store[0].list.nh3}</div>
      </div>
      <div className=" secondary-layer">
        <div>NO:</div>
        <div>{store[0].list.no}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>NO2:</div>
        <div>{store[0].list.no2}</div>
      </div>
      <div className=" secondary-layer">
        <div>O3:</div>
        <div>{store[0].list.o3}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>PM2_5:</div>
        <div>{store[0].list.pm2_5}</div>
      </div>
      <div className=" secondary-layer">
        <div>PM10:</div>
        <div>{store[0].list.pm10}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>SO2:</div>
        <div>{store[0].list.so2}</div>
      </div>
    </Stack>
  );
}

export default city;
