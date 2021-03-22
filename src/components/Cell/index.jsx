import styled from 'styled-components';
import { shade } from 'polished';

export default styled.div`
    background-color: ${({ color, theme }) => theme.palette.weather[color]};
    padding: 2px;
    transition: background-color 300ms ease;
    width: 100%;

    &:hover {
        background-color: ${({ color, theme }) => shade(0.1, theme.palette.weather[color])};
    }
`;
