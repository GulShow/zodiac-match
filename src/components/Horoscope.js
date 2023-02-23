import React, { useEffect, useState } from 'react';
import allSigns from '../assets/data/allsigns';

function Horoscope(props) {
  const [info, setSigns] = useState({});
  const { current_date, description } = info;

  const [match, setMatchView] = useState(false);
  const [loading, setLoading] = useState('');

  const { current } = props;

  //need error handling
  useEffect(() => {
    setLoading(true);
    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const target = `http://ohmanda.com/api/horoscope/${current}`
    const url = `https://aztro.sameerkumar.website/?sign=${current}&day=today`;
    fetch(url, { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setSigns(data))
      .then(() => setLoading(false));
  }, [current]);

  if (loading === true) {
    return 'One moment, searching the stars...';
  }

  function handleClick() {
    setMatchView(!match);
  }

  if (current === undefined) {
    return <p>Select your sign</p>;
  } else {
    return (
      <>
        <h2 className='sign'>{current}</h2>
        <p>{current_date}</p>
        <p className='horoscope'>{description}</p>
        <button onClick={handleClick}>
          {match === true ? 'Hide matches' : 'View matches'}
        </button>
        {match === true
          ? allSigns.map((sign) => {
              if (current === sign.name) {
                return (
                  <div key={sign.id} className='comp-container'>
                    <p className='best'>Best matches: </p>
                    <p>{sign.best}</p>
                    <p className='worst'>Worst matches: </p>
                    <p>{sign.worst}</p>
                  </div>
                );
              } else {
                return null;
              }
            })
          : ''}
      </>
    );
  }
}

Horoscope.defaultProps = {
  current: 'aries',
};

export default Horoscope;
