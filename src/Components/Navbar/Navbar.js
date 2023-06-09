import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

import logo from './logo.png';
import CustomDDM from './DropdownMenu/CustomDDM';
import { handleResize } from '../../Utilities/WindowResize';

function ProjectNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cleanup = handleResize((newWidth) => {
      setWindowWidth(newWidth);
    });

    return cleanup;
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar expand="md" className="navbar">
      <div className="navbar-container">
        <div className="side-container">
          <img className="logo" src={logo} alt="logo" onClick={toTop}/>
        </div>
        {windowWidth <= 900 ? (
          <div className="dropdown-container">
            <CustomDDM />
          </div>
        ) : (
          <>
            <Nav className="navbar-nav" navbar>
              <NavItem>
                <Link className="navlink" activeClass="active" to="about" 
                spy={true} smooth={true} offset={-70} href="">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="experience" 
                spy={true} smooth={true} offset={-70} href="">
                  Experience
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="projects" 
                spy={true} smooth={true} offset={-70} href="">
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="socials" 
                spy={true} smooth={true} offset={-70} href="">
                  Socials
                </Link>
              </NavItem>
            </Nav>
            <div className="side-container">
              <Button outline id="btn" href="https://drive.google.com/file/d/1fS1tur2jLJAuUhM1rJDuV8TeyMBq-hlY/view?usp=sharing" 
              target="_blank" rel="noopener noreferrer" 
              style={{ width: '100%', border: '10px solid #F5F5DC', borderRadius: 10, fontSize: '18px' }}>
                Resume
              </Button>
            </div>
          </>
        )}
      </div>
    </Navbar>
  );
}

export default ProjectNavbar;
