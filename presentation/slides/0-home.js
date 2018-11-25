import React from 'react';
import styled from 'styled-components'
import {
  Slide,
  Text,
  Appear,
} from "spectacle"

import bgIntro from '../../assets/bg-intro.png';

const StyledSlide = styled(Slide)`
  background: url(${bgIntro}) 100% 0/contain no-repeat;
  max-width: 100vw!important;
  max-height: 100vh!important;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: relative;
`;

const Title = styled(Text)`
  position: absolute;
  top: 30%;
  left: 15%;
  text-align: left;
`;


export const HomeSlide = () => (
  <StyledSlide transition={["slide"]} bgColor="white">
    <Title bold textColor="primary">
      <div>We build software </div><div>to help business grow.</div>
    </Title>
  </StyledSlide>
)

/*
      Imagine your company is at a crucial stage.
      The time has come to effectively build an MVP or you want to reach the next level with your business.
*/