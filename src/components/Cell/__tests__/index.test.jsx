import React from 'react';
import renderer from 'react-test-renderer';
import { Grommet } from 'grommet';

import theme from '../../../style/theme';
import Cell from '..';

it('Renders correctly for sunny', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="sunny" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for cloudy', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="cloudy" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for rain', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="rain" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for snow', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="snow" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for sleet', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="sleet" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for thunder', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="thunder" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for fog', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="fog" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly for mist', () => {
  const tree = renderer.create(
    <Grommet theme={theme}>
      <Cell color="mist" />
    </Grommet>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
