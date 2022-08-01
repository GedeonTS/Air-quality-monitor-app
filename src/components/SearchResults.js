import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import London from './London';
import Paris from './Paris';
import Lisbon from './Lisbon';
import Madrid from './Madrid';
import Rome from './Rome';
import Brussels from './Brussels';
import Barcelona from './Barcelona';
import Warsaw from './Warsaw';

export default function SearchResults(props) {
  const { hider, style, name } = props;
  if (name.toLowerCase() === 'london') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <London hider={hider} />
        </div>
        {' '}

      </div>
    );
  } if (name.toLowerCase() === 'paris') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Paris hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'lisbon') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Lisbon hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'madrid') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Madrid hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'rome') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Rome hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'brussels') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Brussels hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'warsaw') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Warsaw hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === 'barcelona') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', width: '150vw' }}>
          <p>
            Result for &apos;
            {name}
            &apos;:
          </p>
          <Barcelona hider={hider} />
        </div>
      </div>
    );
  } if (name.toLowerCase() === '') {
    return (
      <div style={{ display: style }} className="results-section">
        <div style={{ display: 'block', margin: '10px' }}>
          <p className="empty-response">Type something</p>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: style }} className="results-section">
      <div style={{ display: 'block', margin: '10px' }}>
        <Link to="/" className="arrow" onClick={hider}><IoIosArrowBack /></Link>
        <p className="empty-response">
          No results for &apos;
          {name}
          &apos;
        </p>
      </div>
    </div>
  );
}
