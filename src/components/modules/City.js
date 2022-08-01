import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowBack } from 'react-icons/io';

function City(props) {
  const {
    title, CO, NH3, N0, NO2, O3, PM2_5, PM10, SO2, image, hider,
  } = props;
  return (
    <Stack gap={0} className="main-container">
      <div className=" h-15 first-layer" style={{ background: 'linear-gradient(#e66465, #9198e5)' }}>
        <div className={image}>
          <Link to="/" className="arrow" onClick={hider}><IoIosArrowBack /></Link>
          {title}
        </div>
      </div>
      <div className=" secondary-layer description">CITY&apos;S AIR COMPOSITION DATA</div>
      <div className=" secondary-layer">
        <div>co:</div>
        <div>{CO}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>NH3:</div>
        <div>{NH3}</div>
      </div>
      <div className=" secondary-layer">
        <div>NO:</div>
        <div>{N0}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>NO2:</div>
        <div>{NO2}</div>
      </div>
      <div className=" secondary-layer">
        <div>O3:</div>
        <div>{O3}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>PM2_5:</div>
        <div>{PM2_5}</div>
      </div>
      <div className=" secondary-layer">
        <div>PM10:</div>
        <div>{PM10}</div>
      </div>
      <div className=" secondary-layer link-1">
        <div>SO2:</div>
        <div>{SO2}</div>
      </div>
    </Stack>
  );
}

export default City;
