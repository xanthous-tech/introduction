import React from 'react';
import { Slide, Text, Heading } from 'spectacle';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    {children}
  </Slide>
);

// DARK LAYOUT
export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    {children}
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    {children}
  </Slide>
);
