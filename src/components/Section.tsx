import * as React from "react";
import {
  Flex,
  Stack,
  Heading,
  Image,
  HeadingProps,
  ImageProps,
  FlexProps,
} from "@chakra-ui/react";

type Components = {
  Heading: React.FC<HeadingProps>;
  Subheading: React.FC<HeadingProps>;
  Body: React.FC<FlexProps>;
  Content: React.FC<FlexProps>;
  Image: React.FC<ImageProps>;
};

const Section: React.FC<React.PropsWithChildren> & Components = ({
  children,
}) => <Stack>{children}</Stack>;

Section.Heading = (props) => (
  <Heading
    as="h2"
    // size="md"
    color="gray.900"
    letterSpacing="wide"
    fontSize="2.6752rem"
    textTransform="uppercase"
    fontWeight="bold"
    {...props}
  />
);

Section.Subheading = (props) => (
  <Heading
    as="h3"
    // size="sm"
    color="gray.600"
    letterSpacing="wide"
    fontSize="1.5rem"
    textTransform="uppercase"
    fontWeight="bold"
    {...props}
  />
);

Section.Body = (props) => <Flex flex={1} gap={4} {...props} />;

Section.Content = (props) => <Flex flex={1} {...props} />;

Section.Image = (props) => (
  <Flex flex={1}>
    <Image fit="cover" {...props} />
  </Flex>
);

export { Section };
