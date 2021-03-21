import React from 'react';
import useWeather from './hooks/useWeather';
import Main from './pages/Main';

export default () => {
  const { isError, isLoading, data } = useWeather();

  if (isLoading) { return <p data-testid="loading">Loading</p>; }

  if (isError) { return <p data-testid="error">Error</p>; }

  return (
    <Main data={data} />
  );
};
