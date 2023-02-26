import * as React from "react";
import { Flex, Link } from "@chakra-ui/react";

export const Navigation: React.FC = () => (
  <Flex
    w="100%"
    justify="space-around"
    textTransform="uppercase"
    fontSize="sm"
    letterSpacing="wide"
  >
    <NavItem to="about">About</NavItem>
    <NavItem to="clients">Clients</NavItem>
    <NavItem to="candidates">Candidates</NavItem>
    <NavItem to="positions">Positions</NavItem>
    <NavItem to="cv-writing-service">CV writing</NavItem>
    <NavItem to="price-promise">Price promise</NavItem>
    <NavItem to="contact-us">Contact us</NavItem>
  </Flex>
);

const NavItem: React.FC<React.PropsWithChildren<{ to: string }>> = ({
  to,
  children,
}) => <Link>{children}</Link>;
