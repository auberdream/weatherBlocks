import styled from 'styled-components';

export default styled.div`
    background-color: ${({ weather, theme }) => theme.palette.weather[weather]};
    width: 100%;
    padding: 2px;
`;
