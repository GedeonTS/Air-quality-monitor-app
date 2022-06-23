import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  const { coord } = props;
  return (
    <section className="container">
      <div className="header" style={{ background: 'linear-gradient(#e66465, #9198e5)' }}>
        <h1 className="header-title">EUROPE</h1>
        <p className="header-coord">
          {coord[16]}
          °N
        </p>
        <p className="header-coord">
          {coord[17]}
          °E
        </p>
      </div>
      <div className="wrapper">
        <Link to="/paris" className="link">
          <span>PARIS</span>
          <span>
            {coord[0]}
            °N
          </span>
          <span>
            { coord[1]}
            °E
          </span>
        </Link>
        <Link to="/London" className="link link-1">
          <span>LONDON</span>
          <span>
            {coord[2]}
            °N
          </span>
          <span>
            { coord[3]}
            °E
          </span>
        </Link>
        <Link to="/Lisbon" className="link link-1">
          <span>LISBON</span>
          <span>
            {coord[4]}
            °N
          </span>
          <span>
            { coord[5]}
            °E
          </span>
        </Link>
        <Link to="/Madrid" className="link">
          <span>MADRID</span>
          <span>
            {coord[6]}
            °N
          </span>
          <span>
            { coord[7]}
            °E
          </span>
        </Link>
        <Link to="/Rome" className="link">
          <span>ROME</span>
          <span>
            {coord[8]}
            °N
          </span>
          <span>
            { coord[9]}
            °E
          </span>
        </Link>
        <Link to="/Barcelona" className="link link-1">
          <span>BARCELONA</span>
          <span>
            {coord[10]}
            °N
          </span>
          <span>
            { coord[11]}
            °E
          </span>
        </Link>
        <Link to="/Warsaw" className="link link-1">
          <span>WARSAW</span>
          <span>
            {coord[12]}
            °N
          </span>
          <span>
            { coord[13]}
            °E
          </span>
        </Link>
        <Link to="/Brussels" className="link">
          <span>BRUSSELS</span>
          <span>
            {coord[14]}
            °N
          </span>
          <span>
            { coord[15]}
            °E
          </span>
        </Link>

      </div>
    </section>
  );
}

export default Home;
