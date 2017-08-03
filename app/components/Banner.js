import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import About from './About'
import Icons from './Icons'

const FirstDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const StyledDiv = styled.div`
  font-family: 'Lobster', cursive;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  z-index: 5;
  margin-bottom: 2.5%;
  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1.1);
  }
`

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAbout: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      showAbout: !this.state.showAbout,
      hover: false,
    })
  }
  render() {
    let bannerStyle = {
      color: 'rgba(188, 143, 143, 0.5)',
      textDecoration: 'none',
      backgroundColor: 'transparent',
    }
    if (this.state.showAbout) {
      return <About close={this.handleClick} />
    } else {
      return (
        <FirstDiv className="tracked-mega head">
          <StyledDiv>
            <a
              style={bannerStyle}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              onClick={this.handleClick}
            >
              {'<'}
              <span style={{color: 'rgba(188, 143, 143, 0.8)'}}>
                {'NoelAnnParisi '}
              </span>
              {' />'}
            </a>
          </StyledDiv>
          <Icons handleClick ={this.handleClick}/>
        </FirstDiv>
      )
    }
  }
}
