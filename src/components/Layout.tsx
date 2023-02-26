import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <Navigation />
    <Hero />
    {children}
    <Footer />
  </>
);
