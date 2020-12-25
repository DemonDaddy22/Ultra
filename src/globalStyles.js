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

export const Button = styled.button`
    border-radius: 4px;
    background-color: ${({ primary }) => primary ? '#4B59F7' : '#0467FB'};
    white-space: nowrap;
    color: #FFFFFF;
    padding: ${({ large }) => large ? '0.75rem 4rem' : '0.75rem 1.25rem'};
    font-size: ${({ large }) => large ? '1.25rem' : '1rem'};
    outline: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover {
        background-color: ${({ primary }) => primary ? '#0467FB' : '#4B59F7'};
    }
    @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 400px;
    }
`;

export default GlobalStyles;