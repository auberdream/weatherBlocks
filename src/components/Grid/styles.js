import styled from 'styled-components';

export default {
  WeatherGrid: styled.main`
        display: grid;
        grid-template-columns: ${({ columns = 3 }) => `repeat(${columns}, 1fr)`}
    `,
};
