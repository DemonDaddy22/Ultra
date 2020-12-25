import { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from './Navbar.elements';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => handleShowButton(), []);

    window.addEventListener('resize', () => handleShowButton());

    const handleClick = () => setIsClicked(!isClicked);

    const handleShowButton = () => window.innerWidth <= 992 ? setShowButton(false) : setShowButton(true);

    return <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>{isClicked ? <FaTimes /> : <FaBars />}</MobileIcon>
                <NavMenu onClick={handleClick} isClicked={isClicked}>
                    <NavItem>
                        <NavLink to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/products'>Products</NavLink>
                    </NavItem>
                    <NavItemBtn>
                        {showButton ? <NavBtnLink to='/sign-up'>
                            <Button primary>SIGN UP</Button>
                        </NavBtnLink> : <NavBtnLink to='/sign-up'>
                                <Button primary large>SIGN UP</Button>
                            </NavBtnLink>}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>;
}

export default Navbar;