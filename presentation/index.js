// Import React
import React from "react";

// Import styled
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "rgba(0, 0, 0, 0.8)",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE",
  green: "#33B969",
  code: "#1d1f21",
}, {
  primary: "Ubuntu",
  secondary: "Helvetica"
});

// Import Images


// AmznKungfu
import amznkungfulogo from '../assets/amzkungfu_logo.png'
import ppc1 from '../assets/ppc1.png'
import ppc2 from '../assets/ppc2.png'

import quanlooklogo from '../assets/quanlooklogo.png';
import quanlook1 from '../assets/quanlook1.png';
import quanlook2 from '../assets/quanlook2.png';

//Initial View
import initialviewlogo from '../assets/initialviewlogo.png'
import iv1 from '../assets/iv1.png'
import iv2 from '../assets/iv2.png'

// Import Componets
import {
  HomeSlide,
} from './slides/index';
import Logo from '../components/Logo'
import Project from '../components/Project';
import Origins from '../components/Origins';
import { codespan, Highlighted } from './components'

export default class Presentation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Logo />
        <Deck transition={["fade"]} transitionDuration={500} theme={theme} controls={false}>
          <HomeSlide />
          <Slide transition={["fade"]} bgColor="code">
            <Text textColor="primary" textAlign="left">
              We are a team of freelancers who love to help startups grow.
              <br />
              We all used to work in startup environments and understand what it takes
              to build a product <b>from 0 to 1</b>, and <b>from 1 to 100</b>.
              <br />
              We have helped startups and teams from all over the world to implement the idea from scratch,
              optimize and improve their product performance and development workflow,
              and take their businesses to the next stage <b>ASAP</b>.
            </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="code">
            <Text textColor="primary" textAlign="left">
              Not only we understand startups,
              <br />
              <Appear>
                <div>
                  <Text textColor="#777777" textSize="2.3rem">
                    but we also came from industry leaders such as{' '}
                    <Highlighted>Amazon.com</Highlighted> (both Retail and AWS), <Highlighted>Alibaba</Highlighted>, and <Highlighted>Tencent</Highlighted>,
                    and know how to do things at scale.
                  </Text>
                  <Origins />
                </div>
              </Appear>
            </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading> Services Provided </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <List>
              <ListItem>
                AWS Solutions Architecture, especially Serverless Architecture with AWS Lambda
              </ListItem>
              <ListItem>
                High-Performance Data Processing and Search Engine Solutions with Elasticsearch and Apache Kafka, specialized in Digital Marketing Space
              </ListItem>
              <ListItem>
                Rapid Web / Native Design and Prototyping with React.js + Apollo GraphQL
              </ListItem>
              <ListItem>
                Distributed Systems Design with Kubernetes (k8s)
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <List>
              <ListItem>
                Service Oriented Architecture (SOA) with Node.js, Java, and Golang microservices
              </ListItem>
              <ListItem>
                Reactive Systems Design with Reactive Streams Specifications (RxJava, Reactor, RxJS)
              </ListItem>
              <ListItem>
                UI / UX Design (B2B, B2C, Enterprise SaaS)
              </ListItem>
              <ListItem>
                Go-to-China software solutions via Wechat
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Project
              name="AMZKungFu"
              subtitle="Amazon Seller Ads Automation Platform"
              logo={amznkungfulogo}
              website={"amzkungfu.com"}
              desc={[
                '- 2 months prototyping',
                '- Fully Automated and Reactive Data Pipeline with Serverless via AWS Lambda. More than 500k records are synced into DynamoDB in minutes. Also at an extremely low cost of $0 for all the computing power.',
                '- Seamless automation that reacts to the data change. As soon as data is updated, we optimize the bidding strategy for the Amazon seller ads.',
                '- Rapid prototyping with AWS AppSync GraphQL and React. Data is synced to the frontend and rendered into graphs to provide insight for the sellers',
              ]}
              images={[
                ppc1,
                ppc2,
              ]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Project
              name="Quanlook"
              subtitle="A Celebrity-Fans Community in China"
              logo={quanlooklogo}
              website={"quanlook.com"}
              desc={[
                "- 2 month prototyping",
                "- Automatically syncing social feed from Android Client using RxJava",
                "- GraphQL-powered frontend for rapid development",
                "- Wechat-integrated solution, payments included."
              ]}
              mobile
              images={[
                quanlook1,
                quanlook2
              ]} />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Project
              name="Initial View"
              website={"initialview.com"}
              logo={initialviewlogo}
              desc={[
                "- 1 month prototyping",
                "- React SPA development from designer files",
                "- Used Styled-compomemts for styling"
              ]}
              images={[
                iv1,
                iv2
              ]} />
          </Slide>
        </Deck>
      </React.Fragment>
    );
  }
}
