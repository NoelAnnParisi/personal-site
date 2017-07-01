import React from 'react'
import styled from 'styled-components'
// changes the css of selected navbar item
import {Link} from 'react-router-dom'

const NavItem = styled.button`
  text-align:center;
  font-family: raleway;
  font-weight:500;
  font-style:bold;
  font-size:1.5em;
  margin: 10px;
  border:none;
  background: transparent;
  z-index:10;

`

const Nav = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <NavItem>
        <Link
          style={{
            textDecoration: 'none',
            color: 'palevioletred',
            cursor: 'pointer'
          }}
          to="/"
        >
          Welcome
        </Link>
      </NavItem>
    </div>
  )
}

export default Nav
