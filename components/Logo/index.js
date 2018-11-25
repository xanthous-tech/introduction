import React from 'react';
import styled from 'styled-components';
import xanthouslogo from '../../assets/xanthouslogo.svg'
import xTechLogo from '../../assets/x-tech-logo-2.svg'

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 130px;
  z-index: 100;
  img {
    width: 100%;
    height: auto;
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
