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
  top: 242px;
  left: 96px;
  text-align: left;
  overflow: auto;
`;

const Highlight = styled.div`
  position: relative;
  clear: left;
  float: left;
  font-size: 4rem;
  ::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: rgba(255, 205, 56, 0.4);
    left: 0;
    top: 50%;
    z-index: -1;
  }
`;

const SubTitle = styled(Text)`
  position: absolute;
  text-align: left;
  font-size: 1.5rem!important;
  top: 500px;
  left: 103px;
`;

export const HomeSlide = () => (
  <StyledSlide transition={["slide"]} bgColor="white">
    <Title bold textColor="primary">
      <Highlight>We build software </Highlight>
      <Highlight>to help business grow.</Highlight>
    </Title>
    <SubTitle>
      <div>
        We're eager to help startups take their business to the next stage.
      </div>
      <div>
        All that is possible thanks to our distributed team of highly motivated individuals.
      </div>
    </SubTitle>
  </StyledSlide>
)

/*
      Imagine your company is at a crucial stage.
      The time has come to effectively build an MVP or you want to reach the next level with your business.
*/