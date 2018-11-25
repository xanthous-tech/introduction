import React from 'react';
import styled from 'styled-components';
import xanthouslogo from '../../assets/xanthouslogo.svg'
import xTechLogo from '../../assets/x-tech-logo.svg'

const Wrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 200px;
    height: auto;
    top: 50px;
    left: 50px;
    z-index: 100;
  }
`

const Logo = (props) => {
  return (
    <Wrapper>
      <img src={xTechLogo} />
    </Wrapper>
  )
}

export default Logo
