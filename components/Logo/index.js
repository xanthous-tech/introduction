import React from 'react';
import styled from 'styled-components';
import xanthouslogo from '../../assets/xanthouslogo.svg'

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
      <img src={xanthouslogo} />
    </Wrapper>
  )
}

export default Logo
