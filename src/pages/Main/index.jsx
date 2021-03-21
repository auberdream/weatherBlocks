import React from 'react';
import { Column, Cell } from '../../components';
import Styled from './styles';
import weather from './weather';

export default ({ data }) => {
  console.log(data);
  return (
    <Styled.WeatherGrid columns={data.forecast.forecastday.length}>
      {data.forecast.forecastday.map((day) => (
        <Column>
          {day.hour.map((h) => (
            <Cell weather={weather[h.condition.code]} />
          ))}
        </Column>
      ))}
    </Styled.WeatherGrid>
  );
};
