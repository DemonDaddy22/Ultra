import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink } from './Navbar.elements';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => setIsClicked(!isClicked);

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
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>;
}

export default Navbar;