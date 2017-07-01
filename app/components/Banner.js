import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align:center;
  font-size:3em;
  font-weight:200;
  color: palevioletred;
`

const Banner = () => {
  return (
    <div
      className="avenir tracked-mega head mt6 mt7-ns"
      style={{display: 'flex', justifyContent: 'center'}}
    >
      <StyledDiv>
        Noel Parisi
      </StyledDiv>
    </div>
  )
}

export default Banner
