import React from 'react';
import styled from 'styled-components';

// Origin
import amazon from '../../assets/amazon-com-logo-vector-gray.png'
import tencent from '../../assets/tencent.png'
import alibaba from '../../assets/Alibaba-logo-white.png'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  img {
    width: 180px;
    height: 100%;
  }
`

const Origins = (props) => {
  return (
    <Wrapper>
      <img src={amazon} />
      <img src={tencent} />
      <img src={alibaba} />
    </Wrapper>
  )
}
export default Origins
