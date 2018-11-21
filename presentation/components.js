import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Heading,
  Image,
  Code,
  CodePane,
  BlockQuote,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem,
  Slide,
  Deck
} from 'spectacle';


const _Heading = size => {
  const component = ({ children }) => <Heading size={size}>{children}</Heading>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _S = type => {
  const component = ({ children }) => <S type={type}>{children}</S>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _CombineBlockQuote = ({ children }) => (
  <BlockQuote>
    <Quote>{children}</Quote>
  </BlockQuote>
);

_CombineBlockQuote.propTypes = { children: PropTypes.node };

const _CodePane = ({ children, language }) => (
  <CodePane theme="external" lang="javascript" source={children} />
);

_CodePane.propTypes = { code: PropTypes.string, language: PropTypes.string };

export const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

export const Highlighted = styled.span`
  border-bottom: 3px solid #9dffc8;
`


export default {
  a: Link,
  blockquote: _CombineBlockQuote,
  code: _CodePane,
  del: _S('strikethrough'),
  em: _S('italic'),
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  img: Image,
  codespan: Code,
  li: ListItem,
  p: Text,
  strong: _S('bold'),
  ul: List,
  table: Table,
  thead: TableHeader,
  th: TableHeaderItem,
  tbody: TableBody,
  tr: TableRow,
  td: TableItem,
  cursor
};
