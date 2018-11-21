// Import React
import React from "react";

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
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE",
  green: "#33B969",
  code: "#1d1f21",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});
// Import Images
import ppc1 from '../assets/ppc1.png'
import ppc2 from '../assets/ppc2.png'

// Import Componets
import { DarkSlide } from './slides';
import ProjectComponent from './ProjectComponent';
import { codespan } from './components'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <DarkSlide transition={["zoom"]} >
          <Text bold textColor="primary">
            Imagine your company is at a crucial stage.
            The time has come to effectively build an MVP or you want to reach the next level with your business.
          </Text>
          <Appear>
            <Text textColor="green">
              At whatever stage you are, we’ve got you covered
            </Text>
          </Appear>
        </DarkSlide>
        <Slide transition={["fade"]} bgColor="code">
          <Code>
             We are a team of freelancers who love to help startups grow. We all used to work in startup environments and understand what it takes to build a product from 0 to 1, and from 1 to 100. We have helped startups and teams from all over the world to implement the idea from scratch, optimize and improve their product performance and development workflow, and take their businesses to the next stage ASAP.
          </Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <ProjectComponent
            name="AMZKungFu"
            subtitle="Amazon Seller Ads Automation Platform"
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
        </Slide>
      </Deck>
    );
  }
}
