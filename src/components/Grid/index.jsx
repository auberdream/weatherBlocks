import React, { useState } from 'react';
import { format } from 'date-fns';

import Column from '../Column';
import Cell from '../Cell';
import Card from '../Card';
import Styled from './styles';
import weather from './weather';

const initialCard = {
  show: false,
  position: {},
  data: {},
};

export default ({ data }) => {
  const [card, setCard] = useState(initialCard);
  const date = card.data.time && new Date(card.data.time);

  return (
    <Styled.WeatherGrid columns={data.forecast.forecastday.length}>
      {data.forecast.forecastday.map((day, i) => (
        <Column key={`${day.date}-column`} data-testid="column">
          {day.hour.map((h) => (
            <Cell
              data-testid={`column-${i}-cell`}
              key={`${h.time}-cell`}
              onMouseLeave={() => setCard(initialCard)}
              onMouseEnter={(e) => setCard({
                show: true,
                position: {
                  x: e.pageX,
                  y: e.pageY,
                },
                data: h,
              })}
              color={weather[h.condition.code]}
            />
          ))}
        </Column>
      ))}
      {card.show && (
        <Card
          data-testid="weathercard"
          date={format(date, 'dd/MM/yyyy H:mm')}
          condition={card.data.condition.text}
          temperature={`${card.data.temp_c}°`}
          rainChance={card.data.chance_of_rain}
          snowChance={card.data.chance_of_snow}
          position={card.position}
        />
      )}
    </Styled.WeatherGrid>
  );
};
