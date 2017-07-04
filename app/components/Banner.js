import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import About from './About'

const StyledDiv = styled.div`
  text-align: center;
  font-size: 2.8em;
  z-index: 5;
`
export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      showAbout: false,
    }
    this.toggleHover = this.toggleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    })
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
      color: 'palevioletred',
      fontWeight: 200,
      textDecoration: 'none',
      border: 'none',
      backgroundColor: 'transparent',
    }
    this.state.hover
      ? (bannerStyle = {
          color: 'cyan',
          fontWeight: 300,
          border: 'none',
          backgroundColor: 'transparent',
          textDecoration: 'none',
          cursor: 'pointer',
        })
      : null
    if (this.state.showAbout) {
      return <About close={this.handleClick} />
    } else {
      return (
        <div
          className="avenir tracked-mega head mt6 mt7-ns"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledDiv>
            <a
              style={bannerStyle}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              onClick={this.handleClick}
            >
              Noel Parisi
            </a>
          </StyledDiv>
        </div>
      )
    }
  }
}
