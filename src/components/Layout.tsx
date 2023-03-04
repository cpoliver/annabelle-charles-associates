import * as React from "react";
import { Container, Stack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import * as Hero from "./Hero";
import { Navigation } from "./Navigation";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack bg="background" h="100vh">
    <Header />
    <Navigation />
    <Hero.Container backgroundImage="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/banne1-1.jpg">
      <Hero.Heading>
        Beauty, fashion & lifestyle recruitment specialists
      </Hero.Heading>
      <Hero.Subheading>
        We are an independent recruitment agency providing tailor-made staffing
        solutions to SMEs and global businesses across the UK
      </Hero.Subheading>
    </Hero.Container>
    <Container maxW="1024px" alignSelf="center">
      <Stack spacing={16}>{children}</Stack>
    </Container>
    <Footer />
  </Stack>
);
