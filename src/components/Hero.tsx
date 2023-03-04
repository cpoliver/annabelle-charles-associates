import * as React from "react";
import { Stack, StackProps, Heading, HeadingProps } from "@chakra-ui/react";

const HeroContainer: React.FC<StackProps> = (props) => <Stack {...props} />;

const HeroHeading: React.FC<HeadingProps> = (props) => (
  <Heading
    as="h2"
    color="gray.900"
    letterSpacing="wide"
    fontSize="2.6752rem"
    textTransform="uppercase"
    fontWeight="bold"
    {...props}
  />
);

const HeroSubheading: React.FC<HeadingProps> = (props) => (
  <Heading
    as="h3"
    color="gray.600"
    letterSpacing="wide"
    fontSize="1.5rem"
    textTransform="uppercase"
    fontWeight="bold"
    {...props}
  />
);

export {
  HeroContainer as Container,
  HeroHeading as Heading,
  HeroSubheading as Subheading,
};
