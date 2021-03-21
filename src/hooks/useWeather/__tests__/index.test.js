import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import axios from 'axios';
import useWeather from '..';

jest.mock('axios');

describe('useWeather', () => {
  it('Should call the baseURL with API key and default arg', async () => {
    axios.get = jest.fn(() => ({}));
    renderHook(() => useWeather());

    waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://api.weatherapi.com/v1/forecast.json?key=test-api-key');
    });
  });

  it('Can call with extra params', async () => {
    axios.get = jest.fn(() => ({}));
    renderHook(() => useWeather('now', '&something=else'));

    waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://api.weatherapi.com/v1/now.json?key=test-api-key&something=else');
    });
  });
});
