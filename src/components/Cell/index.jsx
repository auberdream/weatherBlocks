import styled from 'styled-components';
import { shade } from 'polished';

export default styled.div`
    background-color: ${({ color, theme }) => theme.palette.weather[color]};
    width: 100%;
    padding: 2px;
    transition: background-color 300ms ease;

    &:hover {
        background-color: ${({ color, theme }) => shade(0.1, theme.palette.weather[color])};
    }
`;
