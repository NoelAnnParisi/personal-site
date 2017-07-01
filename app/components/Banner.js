import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align:center;
  font-weight:300;
  font-style:bold;
  font-size:4em;
  color: cyan;
`

const Banner = () => {
  return (
    <div
      className="code mt6 mt7-ns"
      style={{display: 'flex', justifyContent: 'center'}}
    >
      <StyledDiv>
        Noel Parisi
      </StyledDiv>
    </div>
  )
}

export default Banner
