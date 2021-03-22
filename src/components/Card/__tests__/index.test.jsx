import React from 'react';
import renderer from 'react-test-renderer';
import { Grommet } from 'grommet';

import theme from '../../../style/theme';
import Card from '..';

it('Renders correctly', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Card
        date="01/01/1970 12:00"
        condition="Cloudy"
        temperature="12°"
        rainChance="25"
        snowChance="0"
        position={{ x: 150, y: 300 }}
      />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
