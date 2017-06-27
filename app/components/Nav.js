import React from 'react'
import styled from 'styled-components'
// changes the css of selected navbar item
import {NavLink} from 'react-router-dom'

const NavItem = styled.button`
  text-align:center;
  flex-wrap:wrap;
  font-family: raleway;
  font-weight:500;
  font-style:bold;
  font-size:1.5em;
  margin: 10px;
  border:none;
  background: transparent;
`

const Nav = () => {
  return (
    <div>
      <NavItem>
        <NavLink
          style={{textDecoration: 'none', color: 'white', cursor: 'pointer'}}
          activeStyle={{color: 'white'}}
          to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{textDecoration: 'none', color: 'white', cursor: 'pointer'}}
          activeStyle={{color: 'white'}}
          to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{textDecoration: 'none', color: 'white', cursor: 'pointer'}}
          activeStyle={{color: 'white'}}
          to="/portfolio">
          Portfolio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{textDecoration: 'none', color: 'white', cursor: 'pointer'}}
          activeStyle={{color: 'white'}}
          to="/opinions">
          References
        </NavLink>
      </NavItem>
    </div>
  )
}

export default Nav
