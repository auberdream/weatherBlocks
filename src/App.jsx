import React from 'react';
import useWeather from './hooks/useWeather';

export default () => {
  const data = useWeather();

  return (
    <p>{data.status}</p>
  );
};
