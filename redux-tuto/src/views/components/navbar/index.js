import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

// Styled components for Navbar
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #00bfa5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #00bfa5;
  }
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      color: #f1f1f1;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const AuthButton = styled(Link)`
  background-color: white;
  color: #00bfa5;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          MyApp
        </Link>
      </Logo>

      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/posts">Posts</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">Products</Link>
        </MenuItem>
      </Menu>

      <AuthButtons>
        <AuthButton to="/login">Login</AuthButton>
        <AuthButton to="/signup">Signup</AuthButton>
      </AuthButtons>
    </NavbarContainer>
  );
};

export default Navbar;
