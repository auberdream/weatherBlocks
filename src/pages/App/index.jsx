import React, { useState, useEffect } from 'react';
import { Select, Box } from 'grommet';
import axios from 'axios';

import { Grid } from '../../components';

const cities = [
  'Athens',
  'Baghdad',
  'Bangkok',
  'Barcelona',
  'Beijing',
  'Belgrade',
  'Berlin',
  'Bridgetown',
  'Brussels',
  'Budapest',
  'Copenhagen',
  'Dublin',
  'Havana',
  'Jerusalem',
  'Kiev',
  'London',
  'Miami',
  'Monaco',
  'Nairobi',
  'Oslo',
  'Paris',
  'Prague',
  'Rabat',
  'Reykjavik',
  'Singapore',
  'Taipei',
  'Victoria',
  'Wellington',
];

export default () => {
  const [days, setDays] = useState(3);
  const [location, setLocation] = useState('Havana');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY || ''}&q=${location}&days=${days}`,
    );
    return setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, [location, days]);

  if (!weather) { return <p>Loading</p>; }

  return (
    <>
      <Box data-testid="selectContainer" width="100%" margin={{ vertical: 'large' }} direction="row" alignContent="center" justify="center" style={{ position: 'absolute' }}>
        <Select
          id="locationSelect"
          plain
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.value)}
          options={cities}
          dropHeight="medium"
        />
        <Box width="100px">
          <Select
            plain
            placeholder="days"
            value={days}
            onChange={(e) => setDays(e.value)}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </Box>
      </Box>
      <Grid data={weather} />
    </>
  );
};
