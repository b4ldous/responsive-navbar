import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import {Link, Outlet } from 'react-router-dom';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`




const linkStyle = {
  margin: ".5rem",
  textDecoration: "none",
  color: 'black'
};

const Navbar = () => {
  return (
    <>
    


    <Nav>
      <div className="logo">

      <Link to='/' style={linkStyle}>Logo</Link>
        
      </div>
      <Burger />
    </Nav>
    <Outlet/>

    </>
    
  )
}

export default Navbar