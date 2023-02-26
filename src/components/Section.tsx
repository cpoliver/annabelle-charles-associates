import * as React from "react";
import { Flex, Stack, Heading, Image } from "@chakra-ui/react";

export type SectionProps = React.PropsWithChildren<{
  heading: string;
  subheading?: string;
  image?: string;
  isFlipped?: boolean;
}>;

export const Section: React.FC<SectionProps> = ({
  heading,
  subheading,
  children,
  image,
  isFlipped,
}) => (
  <Stack direction={isFlipped ? "column-reverse" : "column"}>
    <Heading as="h2">{heading}</Heading>
    {subheading && <Heading as="h3">{subheading}</Heading>}
    <Flex gap={4}>
      <Flex flex={1}>{children}</Flex>
      {image && (
        <Flex flex={1}>
          <Image src={image} />
        </Flex>
      )}
    </Flex>
  </Stack>
);
