import React, { useState } from 'react';
import Horoscope from './components/Horoscope';
import allSigns from './assets/data/allsigns';
import './App.css';

function App() {
  const [currentSign, setSign] = useState();
  let current = currentSign;

  return (
    <div className='container'>
      <div className='black'>
        <h2>Zodiac Signs</h2>
        <div className='sign-wrapper'>
          {allSigns.map((sign) => {
            return (
              <div key={sign.id} className='sign-container'>
                <img className='sign-img' src={sign.image} alt='sign' />
                <button
                  onClick={() => setSign(`${sign.name}`)}
                  className='sign-name'
                  type='button'
                >
                  {sign.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className='white'>
        <h2>Horoscope</h2>
        <Horoscope current={current} />
      </div>
    </div>
  );
}

export default App;
