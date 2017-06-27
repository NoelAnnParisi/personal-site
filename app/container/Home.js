import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'

const NavBar = styled.section`
  display:flex;
  height:100%;
  justify-content:center;
  align-items:center;
`

const Home = () => {
  return (
    <NavBar>
      <Nav />
    </NavBar>
  )
}

export default Home
