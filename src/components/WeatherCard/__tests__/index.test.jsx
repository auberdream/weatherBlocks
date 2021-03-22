import React from 'react';
import renderer from 'react-test-renderer';
import { Grommet } from 'grommet';

import theme from '../../../style/theme';
import WeatherCard from '..';

it('Renders correctly', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <WeatherCard
        date="01/01/1970 12:00"
        condition="Cloudy"
        temperature="12"
        rainChance="25"
        snowChance="0"
        position={{ x: 150, y: 300 }}
      />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
