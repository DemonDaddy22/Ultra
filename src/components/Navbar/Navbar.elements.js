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

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 992px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    @media screen and (max-width: 992px) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ isClicked }) => isClicked ? 0 : '-100%'};
        background-color: #101522;
        transition: left 0.4s ease;
    }
`;

export const NavItem = styled.li`
    height: 5rem;
    border-bottom: 4px solid transparent;
    &:hover {
        border-bottom: 4px solid #4b59f7;
        transition: border-bottom 0.2s ease;
    }
    @media screen and (max-width: 992px) {
        width: 100%;
        &:hover {
            border-bottom-color: transparent;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    @media screen and (max-width: 992px) {
        justify-content: center;
        padding: 2rem;
        width: 100%;
        &:hover {
            color: #4b59f7;
            transition: all 0.25s ease;
        }
    }
`;