import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }

  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
};





const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       
      
      
      <li>
      <Link to='/' style={linkStyle}>Home</Link></li>
      <li> <Link to='about' style={linkStyle}>About Us</Link></li>
      <li> <Link to='contact' style={linkStyle}> Contact Us</Link>  </li>
      
    </Ul>
  )
}

export default RightNav