import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-rows: ${({ rows = 24 }) => `repeat(${rows}, 1fr)`};
    height: 100vh;
`;
