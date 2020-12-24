import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 3rem;
    z-index: 1;
    width: 100%;
    max-width: 1300px;

    @media screen and (max-width: 992px) {
        padding: 0 2rem;
    }
`;

export default GlobalStyles;