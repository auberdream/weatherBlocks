import React from 'react';
import { Column } from '../../components';
import Styled from './styles';

export default ({ data }) => {
  console.log(data);
  return (
    <Styled.WeatherGrid columns={data.forecast.forecastday.length}>
      {data.forecast.forecastday.map(() => (
        <Column />
      ))}
    </Styled.WeatherGrid>
  );
};
