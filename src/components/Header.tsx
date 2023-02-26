import * as React from "react";
import { Flex, Link } from "@chakra-ui/react";

export const Header: React.FC = () => (
  <Flex bg="black" color="white" p={2} fontSize="sm" gap={8}>
    <Link as="a" href="https://goo.gl/maps/54E3TLjcFxzP8iwQ6" target="_blank">
      Annabelle Charles Associates Ltd • London, W1W 7LT • Leeds, LS19 6HW
    </Link>
    <Link as="a" href="tel:07972665337" target="_self">
      07972 665337
    </Link>
    <Link as="a" href="mailto:annabelle@annabellecharles.co.uk" target="_self">
      annabelle@annabellecharles.co.uk
    </Link>
  </Flex>
);
