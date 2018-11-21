import React from 'react';
import { Appear } from 'spectacle';
import styled from 'styled-components';

const ProjectSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  align-items: center;
`

const PictureColumn = styled(Column)`
  flex-flow: ${props => (props.mobile) ? "row": "columm"} nowrap;
  flex: 1;
  img {
    width: ${props => (props.mobile) ? "60%": "100%"};
    margin-bottom: 10px;
    margin-right: 10px;
  }
`

const TextColumn = styled(Column)`
  align-items: flex-start;
  margin-right: 10px;
  min-height: 500px;
  .header {
    text-align: left;
    font-size: 1em;
    font-weight: 600;
  }
  .subtitle {
    font-size: 0.4em;
    color: #666666;
  }
  p {
    color: #666666;
    font-size: 16px;
    text-align: left;
    margin-bottom: 2px;
  }

`

const FancyLinkWrapper = styled.div`
  a {
    color: #000;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    transform: translateY(0) scale(1);
    transition: color 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 2s cubic-bezier(.19,1,.22,1) 0s, opacity 2s cubic-bezier(.19,1,.22,1) 0s
  }

  .blue:hover {
    color: #2400ff;
  }
  .sliding:hover {
    transform: translate(3px,0);
  }
  .sliding:after {
      content: '';
      display: block;
      height: 2px;
      width: 0;
      background: white;
      transition: width .3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .blue:after {
      background: blue;
  }
  .blue:hover:after {
      background: blue;
  }
  .sliding:hover:after {
      width: 100%;
  }
`

const LogoHolder = styled.img`
  max-width: 200px;
`


export default class ProjectComponent extends React.Component {
  render() {
    const { name, subtitle, desc, images, website, logo, mobile } = this.props
    return (
      <ProjectSection>
        <TextColumn>
          {
            (logo)
              ? <LogoHolder src={logo} />
              : <h1 className="header"> {name} </h1>
          }
          <h3 className="subtitle"> {subtitle} </h3>
          {desc.map(p => (
            <p>
              {p}
            </p>
          ))}
          <FancyLinkWrapper>
            <a
              className="blue sliding"
              target="_blank"
              href={`https://${website}`}>
              {website}
            </a>
          </FancyLinkWrapper>
        </TextColumn>
        <PictureColumn mobile={mobile}>
          {
            images.map(i => (
              <Appear>
                <img src={i} alt="project pictures"/>
              </Appear>
            ))
          }
        </PictureColumn>
      </ProjectSection>
    )
  }
}
