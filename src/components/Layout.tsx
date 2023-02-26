import * as React from "react";
import { Container, Stack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack bg="background" h="100vh">
    <Header />
    <Navigation />
    <Hero />
    <Container maxW="1024px" alignSelf="center">
      <Stack spacing={16}>{children}</Stack>
    </Container>
    <Footer />
  </Stack>
);
