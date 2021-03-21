import { useQuery } from 'react-query';
import axios from 'axios';

export default (type = 'forecast', params = '') => useQuery('weather', async () => {
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/${type}.json?key=${process.env.REACT_APP_WEATHER_KEY || ''}&q=London&days=7${params}`,
  );
  return data;
});
