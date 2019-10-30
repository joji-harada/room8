import React from 'react';
import '../style/components/welcome.sass';

const titleCase = str => {
  return str
    .split('')
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter.toLowerCase()))
    .join('');
};

const Welcome = ({ name }) => (
  <div className='box welcome-box'>
    <h1 className='has-text-weight-bold'>Welcome {titleCase(name)}!</h1>
  </div>
);

export default Welcome;
