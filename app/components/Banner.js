import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const StyledDiv = styled.div`
  text-align: center;
  font-size: 3em;
  font-weight: 200;
  color: palevioletred;
  z-index: 5;
`
export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
    this.toggleHover = this.toggleHover.bind(this)
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    })
  }
  render() {
    let bannerStyle = {color: 'palevioletred', textDecoration: 'none'}
    this.state.hover
      ? (bannerStyle = {
          color: 'cyan',
          fontWeight: 300,
          textDecoration: 'none',
        })
      : null
    return (
      <div
        className="avenir tracked-mega head mt6 mt7-ns"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <StyledDiv>
          <Link
            style={bannerStyle}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            to="/about"
          >
            Noel Parisi
          </Link>
        </StyledDiv>
      </div>
    )
  }
}
