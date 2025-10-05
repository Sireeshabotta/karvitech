import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/Ravi1.png';

const TopBar = styled.div`
  background: #1a237e;
  color: #f5f5f5;
  font-size: 0.9rem;
  padding: 6px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  user-select: none;
  
  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.8rem;
    justify-content: center;
  }
`;

const HeaderWrapper = styled.header`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  width: 350px;
  height: 100px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  user-select: none;
  display: block;

  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 35px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1a237e;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 16px;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  color: #1a237e;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  padding: 6px 0;
  
  ${props => props.$isActive && `
    color: #ff6f00;
    font-weight: 700;
  `}

  &:hover,
  &:focus {
    color: #303f9f;
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
  }
`;

const NavButton = styled.button`
  font-weight: 600;
  color: #1a237e;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  padding: 6px 0;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;

  &:hover,
  &:focus {
    color: #303f9f;
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
  }
`;

const DropdownToggle = styled.span`
  margin-left: 6px;
  font-size: 0.7rem;
  user-select: none;
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  list-style: none;
  padding: 8px 0;
  margin: 4px 0 0 0;
  min-width: 160px;
  z-index: 10000;
  
  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border-radius: 0;
    margin: 8px 0;
    padding: 0;
    background: #f8f9fa;
    width: 100%;
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 8px 20px;
  color: #1a237e;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f0f0f0;
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    text-align: center;
  }
`;

const ContactButton = styled(Link)`
  background-color: #ff6f00;
  color: white;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.7);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    background-color: #e65100;
    box-shadow: 0 10px 30px rgba(255, 111, 0, 0.9);
    outline: none;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    margin-top: 10px;
  }
`;

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.2 } },
};

function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
  };

  return (
    <>
      <TopBar>
        <a href="tel:+919902468711" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span role="img" aria-label="phone">📞</span> +919902468711
        </a>
      </TopBar>
      <HeaderWrapper>
        <Logo to="/" aria-label="Karvitech Software Solutions Logo" />
        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <Nav isOpen={mobileMenuOpen}>
          <NavLink 
            to="/" 
            $isActive={location.pathname === '/'}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            $isActive={location.pathname === '/about'}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>

          <NavButton
            onClick={(e) => {
              e.preventDefault();
              setSolutionsOpen(!solutionsOpen);
              setResourcesOpen(false);
            }}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={solutionsOpen}
          >
            Products <DropdownToggle>▼</DropdownToggle>
            <AnimatePresence>
              {solutionsOpen && (
                <DropdownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <DropdownItem 
                    as={Link}
                    to="/web-development"
                    onClick={closeMobileMenu}
                  >
                    Web Development
                  </DropdownItem>
                  <DropdownItem 
                    as={Link}
                    to="/mobile-apps"
                    onClick={closeMobileMenu}
                  >
                    Mobile Apps
                  </DropdownItem>
                  <DropdownItem 
                    as={Link}
                    to="/business-email"
                    onClick={closeMobileMenu}
                  >
                    Business Email
                  </DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavButton>

          <NavButton
            onClick={(e) => {
              e.preventDefault();
              setResourcesOpen(!resourcesOpen);
              setSolutionsOpen(false);
            }}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={resourcesOpen}
          >
            Resources <DropdownToggle>▼</DropdownToggle>
            <AnimatePresence>
              {resourcesOpen && (
                <DropdownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <DropdownItem as={Link} to="/blog" onClick={closeMobileMenu}>Blog</DropdownItem>
                  <DropdownItem as={Link} to="/case-studies" onClick={closeMobileMenu}>Case Studies</DropdownItem>
                  <DropdownItem as={Link} to="/documentation" onClick={closeMobileMenu}>Documentation</DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavButton>

          <ContactButton 
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact Us
          </ContactButton>
        </Nav>
      </HeaderWrapper>
    </>
  );
}

export default Header;