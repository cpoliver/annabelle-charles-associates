import * as React from "react";
import {
  Flex,
  FlexProps,
  Stack,
  Heading,
  Image,
  HeadingProps,
  ImageProps,
} from "@chakra-ui/react";

const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack>{children}</Stack>
);

const SectionHeading: React.FC<HeadingProps> = (props) => (
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

const SectionSubheading: React.FC<HeadingProps> = (props) => (
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

const SectionBody: React.FC<FlexProps> = (props) => (
  <Flex flex={1} gap={4} {...props} />
);

const SectionContent: React.FC<FlexProps> = (props) => (
  <Flex flex={1} {...props} />
);

const SectionImage: React.FC<ImageProps> = (props) => (
  <Flex flex={1}>
    <Image fit="cover" {...props} />
  </Flex>
);

export {
  SectionContainer as Container,
  SectionHeading as Heading,
  SectionSubheading as Subheading,
  SectionBody as Body,
  SectionContent as Content,
  SectionImage as Image,
};
