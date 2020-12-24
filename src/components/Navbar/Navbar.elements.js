import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
    background-color: #101522;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`; 