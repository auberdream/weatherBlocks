import React from 'react';
import renderer from 'react-test-renderer';
import { Grommet } from 'grommet';

import theme from '../../../style/theme';
import Column from '..';

it('Renders correctly', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Column />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for different rows', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Column rows={12} />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
