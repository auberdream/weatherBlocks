import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { Grommet } from 'grommet'
import axios from 'axios'

import App from '../index'
import theme from '../../../style/theme'
import mocks from '../../../__mocks__/index.mock'

jest.mock('axios')

it('Calls axios.get with the correct args on mount', () => {
    axios.get = jest.fn(async () => { return {} })

    render(
        <Grommet theme={theme}>
            <App />
        </Grommet>
    )

    expect(axios.get).toHaveBeenCalledWith('https://api.weatherapi.com/v1/forecast.json?key=TEST_API_KEY&q=Havana&days=3')
})

it('It renders loading when data has not been returned', () => {
    axios.get = jest.fn(async () => { return {} })

    render(
        <Grommet theme={theme}>
            <App />
        </Grommet>
    )

    expect(screen.getByText('Loading')).toBeInTheDocument()
})

it('Renders correctly when data is returned', async () => {
    axios.get = jest.fn(async () => { return { data: mocks.weather } })

    render(
        <Grommet theme={theme}>
            <App />
        </Grommet>
    )

    await waitFor(() => {
        screen.getByTestId('selectContainer')
    })

    const columns = screen.getAllByTestId('column')
    expect(columns.length).toEqual(2);

    const column0Cells = screen.getAllByTestId('column-0-cell')
    const column1Cells = screen.getAllByTestId('column-1-cell')
    expect(column0Cells.length).toEqual(8);
    expect(column1Cells.length).toEqual(11);
})

