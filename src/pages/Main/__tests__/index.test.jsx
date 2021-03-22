import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Grommet } from 'grommet';

import theme from '../../../style/theme';
import Main from '..';
import mocks from '../__mocks__/index.mock'

it('Renders the correct amount of columns', () => {
    render(
        <Grommet theme={theme}>
            <Main data={mocks.weather} />
        </Grommet>
    );

    const columns = screen.getAllByTestId('column')

    expect(columns.length).toEqual(2);
});

it('Renders the correct amount of cells', () => {
    render(
        <Grommet theme={theme}>
            <Main data={mocks.weather} />
        </Grommet>
    );

    const column0Cells = screen.getAllByTestId('column-0-cell')
    const column1Cells = screen.getAllByTestId('column-1-cell')

    expect(column0Cells.length).toEqual(8);
    expect(column1Cells.length).toEqual(11);
});

it('Hovering over a cell shows the weather card', async () => {
    render(
        <Grommet theme={theme}>
            <Main data={mocks.weather} />
        </Grommet>
    );

    fireEvent.mouseEnter(screen.getAllByTestId('column-1-cell')[0])

    await waitFor(() => {
        expect(screen.getByTestId('weathercard')).toBeInTheDocument()
    })
})

it('Leaving a cell stops showing the weathercard', async () => {
    render(
        <Grommet theme={theme}>
            <Main data={mocks.weather} />
        </Grommet>
    );

    fireEvent.mouseEnter(screen.getAllByTestId('column-1-cell')[0])

    await waitFor(() => {
        expect(screen.getByTestId('weathercard')).toBeInTheDocument()
    })

    fireEvent.mouseLeave(screen.getAllByTestId('column-1-cell')[0])

    await waitFor(() => {
        expect(screen.queryByTestId('weathercard')).not.toBeInTheDocument()
    })
})