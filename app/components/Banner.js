import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import About from './About'

const StyledDiv = styled.div`
  font-family: 'Lobster', cursive;
  text-align: center;
  font-size: 3.3em;
  font-weight: 600;
  z-index: 5;
  &:hover {
    cursor: pointer;
    transition: 1.2s;
    transform: scale(1.2);
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
      color: '#bc8f8f',
      textDecoration: 'none',
      backgroundColor: 'transparent',
    }
    if (this.state.showAbout) {
      return <About close={this.handleClick} />
    } else {
      return (
        <div
          className="tracked-mega head mt6 mt7-ns"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledDiv>
            <a
              style={bannerStyle}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              onClick={this.handleClick}
            >
              {'<' + 'NoelParisi' + ' />'}
            </a>
          </StyledDiv>
        </div>
      )
    }
  }
}
