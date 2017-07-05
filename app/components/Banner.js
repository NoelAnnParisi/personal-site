import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import About from './About'

const StyledDiv = styled.div`
  font-family: 'Lobster', cursive;
  text-align: center;
  font-size: 3.3em;
  z-index: 5;
  &:hover {
    cursor: pointer;
    font-weight: 600;
    text-shadow: 0 0 7px #d3959b;
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
      color: '#D3959B',
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
